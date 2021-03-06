import React, {useState, useEffect} from 'react';
import {Form, Grid, Table, Segment, Dropdown, Button, Label} from "semantic-ui-react";
import LineChartPF from "../Components/LineChartPF";
import {evaluate} from "mathjs";
import * as d3 from "d3";
import update from "immutability-helper";
import useWindowSize from "../Components/useWindowSize";


const PuntoFijo = () => {

  const [data, setData] = useState([]);
  const [funcionX, setFuncionX] = useState("(x^2)-(3*x)-(1)");
  const [funcionG, setFuncionG] = useState("((x^2)-1)/3");
  const [puntoA, setPuntoA] = useState(-1);
  const [puntoB, setPuntoB] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [xZero, setXZero] = useState(puntoB);
  const [iteraciones, setIteraciones] = useState([]);
  const [width, height] = useWindowSize();

  useEffect(() => {
    try {
      let dataToSet = [];
      if (answer === 0) {
        setIteraciones([{
          i: 0,
          x: xZero,
          gx: evaluate(funcionG.replaceAll("x", `(${xZero})`))
        }])
      }

      let dominio = d3.range(puntoA, puntoB, 0.05)
      let valsFX = dominio.map(x => (
        {funcion: "fx", x: Number(x), y: evaluate(funcionX.replaceAll("x", `(${x})`))}
      ))
      let valsGX = dominio.map(x => (
        {funcion: "gx", x: Number(x), y: evaluate(funcionG.replaceAll("x", `(${x})`))}
      ))
      let valoresXY = dominio.map(x => (
        {funcion: "xy", x: Number(x), y: Number(x)}
      ))
      let answerXY = dominio.map(x => (
        {funcion: "answerXY", x: Number(answer), y: Number(x)}
      ))

      dataToSet = dataToSet.concat(valsFX).concat(valsGX).concat(valoresXY).concat(answerXY)
      setData(dataToSet)

    } catch (error) {
      console.log(error)
    }
  }, [funcionX, funcionG, puntoA, puntoB, answer, xZero]);


  return (
    <Grid rows={"2"} columns={"2"} divided>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Form>
              <Label
                color="red"
              >
                F(x)
              </Label>
              <Form.Input
                placeholder={"F(x) (Rojo)"}
                value={funcionX}
                onChange={(e, s) => setFuncionX(s.value)}
              />

              <Label
              color={"blue"}
              >
                G(x)
              </Label>
              <Form.Input
                placeholder={"G(x) (Azul)"}
                value={funcionG}
                onChange={(e, s) => setFuncionG(s.value)}
              />

              <Form.Group>
                <Label>Rango A - B :</Label>
                <Form.Input
                  placeholder={"a"}
                  value={puntoA}
                  onChange={(e, s) => setPuntoA(s.value)}
                />
                <Form.Input
                  placeholder={"b"}
                  value={puntoB}
                  onChange={(e, s) => setPuntoB(s.value)}
                />
              </Form.Group>

              <Label>
                X0
              </Label>
              <br/>
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
                  setIteraciones([{i: 0, x: xZero, gx: evaluate(funcionG.replaceAll("x", `(${xZero})`))}])
                  setXZero(s.value)
                }}
              />
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <LineChartPF  reload={{width, height}} data={data} rango={{xa: puntoA, xb: puntoB}}/>
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
                    g(x)
                  </Table.HeaderCell>
                </Table.Row>

              </Table.Header>
              <Table.Body>

                {iteraciones.map(i =>
                  <Table.Row>
                    <Table.Cell>{i.i}</Table.Cell>
                    <Table.Cell>{i.x}</Table.Cell>
                    <Table.Cell>{i.gx}</Table.Cell>
                  </Table.Row>
                )}
                <Table.Row>
                  <Table.Cell colSpan={"3"}>
                    <Button
                      icon={"plus"}
                      color={"green"}
                      onClick={() => {
                        try {
                          const newIters = update(iteraciones, {$push:[{
                              i: iteraciones[iteraciones.length - 1].i+1,
                              x: iteraciones[iteraciones.length - 1].gx,
                              gx: evaluate(funcionG.replaceAll("x", `(${iteraciones[iteraciones.length - 1].gx})`))
                            }]});
                          setAnswer(evaluate(funcionG.replaceAll("x", `(${newIters[newIters.length - 1].gx})`)))
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

export default PuntoFijo;
