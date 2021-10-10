/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Form, Grid, Label, Segment, Table} from "semantic-ui-react";
import {derivative, evaluate, pi} from "mathjs";
import LineChartNR from "../Components/LineChartNR";
import update from "immutability-helper";
import * as d3 from "d3";
import useWindowSize from "../Components/useWindowSize";

const NewtonRaphson = () => {

  const [puntoA, setPuntoA] = useState(0);
  const [puntoB, setPuntoB] = useState(pi / 2);
  const [funcionF, setFuncionF] = useState("cos(x)-x");
  const [funcionDF, setFuncionDF] = useState("-(sin(x) + 1)");
  const [funcionDDF, setFuncionDDF] = useState("-cos(x)");
  const [funcionDDDF, setFuncionDDDF] = useState("sin(x)");
  const [data, setData] = useState([]);
  const [xZero, setXZero] = useState(puntoB);
  const [iteraciones, setIteraciones] = useState([]);
  const [width, height] = useWindowSize();


  useEffect(() => {
    try {
      let fdf = derivative(funcionF, "x").toString();
      let fddf = derivative(fdf, "x").toString();
      let fdddf = derivative(fddf, "x").toString();
      setFuncionDF(fdf);
      setFuncionDDF(fddf);
      setFuncionDDDF(fdddf);

      setIteraciones([{
        i:1,
        x: xZero,
        formula: evaluate(
          "x-((a)/(b))"
          .replaceAll("a", funcionF)
          .replaceAll("b", fdf)
          .replaceAll("x", `(${xZero})`)
        ),
        modulofx:Math.abs(evaluate(funcionF.replaceAll("x", `(${xZero})`)))
      }])

      let dataToSet = [];

      let dominio = d3.range(puntoA, puntoB, 0.05)
      let valsFX = dominio.map(x => (
        {funcion: "fx", x: Number(x), y: evaluate(funcionF.replaceAll("x", `(${x})`))}
      ))
      let valsDFX = dominio.map(x => (
        {funcion: "fdx", x: Number(x), y: evaluate(funcionDF.replaceAll("x", `(${x})`))}
      ))
      let valsDDFX = dominio.map(x => (
        {funcion: "fddx", x: Number(x), y: evaluate(funcionDDF.replaceAll("x", `(${x})`))}
      ))
      let valsDDDFX = dominio.map(x => (
        {funcion: "fdddx", x: Number(x), y: evaluate(funcionDDDF.replaceAll("x", `(${x})`))}
      ))

      dataToSet = dataToSet.concat(valsFX).concat(valsDFX).concat(valsDDFX).concat(valsDDDFX)
      setData(dataToSet)


    } catch (error) {
      console.log(error)
    }

  }, [funcionF, puntoA, puntoB, xZero])

  return (
    <Grid rows={"2"} columns={"2"} divided>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Form>
              <Label
                color={"green"}>
                F(x)
              </Label>
              <Form.Input
                placeholder={"f(x)"}
                value={funcionF}
                onChange={(e, s) => setFuncionF(s.value)}
              />
              <Label
                color={"red"}
                pointing={"bottom"}>
                F'(x) = {funcionDF}
              </Label>
              <Label
                color={"blue"}
              >
                F''(x) = {funcionDDF}
              </Label>
              <Label
                color={"orange"}
              >
                F''(x) = {funcionDDDF}
              </Label>
              <br/>
              <br/>
              <Form.Group>
                <Label>Rango A - B: </Label>
                <Form.Input
                  placeholder={"punto a"}
                  value={puntoA}
                  onChange={(e, s) => setPuntoA(s.value)}
                />
                <Form.Input
                  placeholder={"punto b"}
                  value={puntoB}
                  onChange={(e, s) => setPuntoB(s.value)}
                />
              </Form.Group>
              <Label>X0: </Label>
              <Dropdown
                placeholder={"x0"}
                selection
                options={[{key: "a", value: puntoA, text: `a = ${puntoA}`}, {
                  key: "b",
                  value: puntoB,
                  text: `b = ${puntoB}`
                }]}
                value={xZero}
                onChange={(e, s) => {
                  setXZero(s.value)
                }}
              />
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <LineChartNR reload={{width, height}} data={data}/>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={"16"}>
          <Segment>
            <Table celled textAlign={"center"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    i
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    x
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    x = x-f/f'
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    | f(x) |
                  </Table.HeaderCell>
                </Table.Row>

              </Table.Header>
              <Table.Body>

                {iteraciones.map(i =>
                  <Table.Row>
                    <Table.Cell>{i.i}</Table.Cell>
                    <Table.Cell>{i.x}</Table.Cell>
                    <Table.Cell>{i.formula}</Table.Cell>
                    <Table.Cell>{i.modulofx}</Table.Cell>
                  </Table.Row>

                )}
                <Table.Row>
                  <Table.Cell colSpan={"4"}>
                    <Button
                      icon={"plus"}
                      color={"green"}
                      onClick={() => {
                        try {

                          const lastVal = iteraciones[iteraciones.length-1];
                          const newIters = update(iteraciones, {$push:[
                              {
                                i: lastVal.i+1,
                                x: lastVal.formula,
                                formula: evaluate(
                                  "x-((a)/(b))"
                                  .replaceAll("a", funcionF)
                                  .replaceAll("b", funcionDF)
                                  .replaceAll("x", `(${lastVal.formula})`)
                                ),
                                modulofx:Math.abs(evaluate(funcionF.replaceAll("x", `(${lastVal.x})`)))
                              }
                            ]})

                          setIteraciones(newIters)
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default NewtonRaphson;
