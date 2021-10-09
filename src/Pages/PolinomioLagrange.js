import React, {useEffect, useState} from 'react';
import {Form, Grid, Label, Segment, Tab, Table} from "semantic-ui-react";
import update from "immutability-helper";
import {evaluate, simplify} from "mathjs";
import {MathComponent} from "mathjax-react";


const PolinomioLagrange = () => {

  const [funcion, setFuncion] = useState("1/x");
  const [puntos, setPuntos] = useState([
    {x: 1, fx: 1}, {x: -1, fx: -1}, {x: 2, fx: 0.5}
  ]);
  const [x, setX] = useState("");
  const [polinomial, setPolinomial] = useState("");
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
    }

    setLS(contenedorL)
    setPolinomial(contenedorL.map(l => `(${l.formula}*${l.coeficiente})`).join("+"))

  }, [puntos, funcion])

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
              <MathComponent tex={`P(x) = `+polinomial}/>
          </Segment>
          <Table textAlign={"center"} celled>
            <Table.Header>
              <Table.HeaderCell>Ln</Table.HeaderCell>
              <Table.HeaderCell>Formula</Table.HeaderCell>
              <Table.HeaderCell>Coeficiente</Table.HeaderCell>
            </Table.Header>

            <Table.Body>
              {LS.map(l =>
                <Table.Row>
                  <Table.Cell>{l.id}</Table.Cell>
                  <Table.Cell>
                    <MathComponent tex={l.formula}/>
                  </Table.Cell>
                  <Table.Cell>
                    {l.coeficiente}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
);
};

export default PolinomioLagrange;
