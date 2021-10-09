import React, {useEffect, useState} from 'react';
import {Button, Form, Grid, Label, Segment, Table} from "semantic-ui-react";
import update from "immutability-helper";
import {evaluate, simplify} from "mathjs";

const PolinomioLagrange = () => {

  const [funcion, setFuncion] = useState("1/x");
  const [puntos, setPuntos] = useState([
    {x: 1, fx: 1},{x: -1, fx: -1},{x: 2, fx: 0.5}
  ]);
  const [x, setX] = useState("");
  const [poli, setPoli] = useState("");
  const [LS, setLS] = useState([]);


  useEffect(() => {

    let contenedorL = [];

    for (let i = 0; i < puntos.length; i++) {
      let p = puntos[i];
      let stringTop = "";
      let stringBottom = "";

      for (let j = 0; j < puntos.length; j++) {
        if (j !== i) {
          let p2 = puntos[j]
          stringTop += `((x)-(${p2.x}))`
          stringBottom += `((${p.x})-(${p2.x}))`
        }
      }

      contenedorL.push({
        id: `L${i}`,
        formula: `(${simplify(stringTop).toString()}/${evaluate(stringBottom)})`,
        coeficiente: `(${p.fx})`
      })

      // console.log({
      //   id: `L${i}`,
      //   formula: `(${simplify(stringTop).toString()}/${evaluate(stringBottom)})`,
      //   coeficiente: `(${p.fx})`
      // })
      // console.log(simplify(stringTop).toString())
      // console.log(evaluate(stringBottom))
      // console.log(`(${simplify(stringTop).toString()}/${evaluate(stringBottom)})`)
      // console.log(evaluate(
      //   `(${simplify(stringTop).toString()}/${evaluate(stringBottom)})`.replaceAll("x",2)
      // ))
      // console.log(simplify("").toString())
      // console.log(evaluate(stringL.replaceAll("x",2)))
    }

    console.log(contenedorL)
    setLS(contenedorL)
    let pol = "";
    contenedorL.map(l => `(${l.formula}*${l.coeficiente})`).join("+")
    setPoli(pol)
    console.log(contenedorL.map(l => `(${l.formula}*${l.coeficiente})`).join("+"))

  }, [puntos])

  return (
    <Grid rows={"2"} columns={"2"} divided>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Form>
              <Label>
                F(x)
              </Label>
              <Form.Input
                placeholder={"F(x)"}
                value={funcion}
                onChange={(e, s) => {
                  setPuntos([])
                  setFuncion(s.value)
                }}
              />
            </Form>
            <br/>
            <Table textAlign={"center"} celled>
              <Table.Header>
                <Table.HeaderCell>x</Table.HeaderCell>
                <Table.HeaderCell>f(x)</Table.HeaderCell>
              </Table.Header>

              <Table.Body>

                {puntos.map(p =>
                  <Table.Row>
                    <Table.Cell>{p.x}</Table.Cell>
                    <Table.Cell>{p.fx}</Table.Cell>
                  </Table.Row>
                )}

                <Table.Row>
                  <Table.Cell colSpan={"2"}>
                    <Form
                      onSubmit={() => {
                        try {
                          console.log(x)
                          if (!puntos.map(p => p.x).includes(x)) {
                            setPuntos(update(puntos, {
                              $push: [
                                {
                                  x: x,
                                  fx: evaluate(funcion.replaceAll("x", `(${x})`))
                                }
                              ]
                            }))
                          }
                          setX("")
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    >
                      <Form.Group>
                        <Form.Input
                          name={"x"}
                          placeholder={"x"}
                          value={x}
                          onChange={(e, s) => setX(s.value)}
                        />
                        <Form.Button
                          icon={"plus"}
                          color={"green"}
                          type={"submit"}
                        />
                      </Form.Group>
                    </Form>
                  </Table.Cell>
                </Table.Row>

              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PolinomioLagrange;
