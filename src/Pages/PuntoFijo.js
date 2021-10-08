import React, {useState, useEffect} from 'react';
import {Form, Grid, Table, Segment, Dropdown, Button} from "semantic-ui-react";
import LineChartNoWrapper from "../Components/LineChartNoWrapper";
import {evaluate} from "mathjs";
import * as d3 from "d3";


const PuntoFijo = () => {

  const [data, setData] = useState([]);
  const [funcionX, setFuncionX] = useState("(x^2)-(3*x)-(1)");
  const [funcionG, setFuncionG] = useState("((x^2)-1)/3");
  const [puntoA, setPuntoA] = useState(-1);
  const [puntoB, setPuntoB] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [xZero, setXZero] = useState(puntoB);
  const [iteraciones, setIteraciones] = useState([{
    i: 0,
    x: xZero,
    gx: evaluate(funcionG.replaceAll("x", `(${xZero})`))
  }]);

  useEffect(() => {
    try {
      let dataToSet = [];
      // setFuncionDeriv(derivative(funcionX, "x").toString())

      console.log(funcionX.replaceAll("x", -0.5))

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
    }
  }, [funcionX, funcionG, puntoA, puntoB, answer]);


  return (
    <Grid rows={"2"} columns={"2"} divided>

      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Form>
              <label>F(x)</label>
              <Form.Input
                placeholder={"F(x) (Rojo)"}
                value={funcionX}
                onChange={(e, s) => setFuncionX(s.value)}
              />
              <br/>
              <br/>
              <label>G(x)</label>
              <Form.Input
                placeholder={"G(x) (Azul)"}
                value={funcionG}
                onChange={(e, s) => setFuncionG(s.value)}
              />

              <label>Rango A - B</label>
              <Form.Group>
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

              <label>
                X0
              </label>
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
            <LineChartNoWrapper data={data} rango={{xa: puntoA, xb: puntoB}}/>
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
                        let newIters = iteraciones;
                        newIters.push({
                          i: newIters[newIters.length - 1]+1,
                          x: newIters[newIters.length - 1].gx,
                          gx: evaluate(funcionG.replaceAll("x", `(${newIters[newIters.length - 1].gx})`))
                        })
                        setAnswer(evaluate(funcionG.replaceAll("x", `(${newIters[newIters.length - 1].gx})`)))
                        setIteraciones(newIters)
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
