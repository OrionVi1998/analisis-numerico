/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Form, Grid, Label, Segment, Table} from "semantic-ui-react";
import update from "immutability-helper";
import {evaluate, simplify} from "mathjs";
import {MathComponent} from "mathjax-react";
import * as d3 from "d3";
import LineChartPoliRaphson from "../Components/LineChartPoliRaphson";
import useWindowSize from "../Components/useWindowSize";


const PolinomioLagrange = () => {

  const [funcion, setFuncion] = useState("1/x");
  const [puntos, setPuntos] = useState([
    {x: "1", fx: "1"}, {x: "-1", fx: "-1"}, {x: "2", fx: "0.5"}
  ]);
  const [puntoX, setPuntoX] = useState("");
  const [polinomial, setPolinomial] = useState("");
  const [LS, setLS] = useState([]);
  const [px, setPX] = useState([]);
  const [puntosPolinomio, setPuntosPolinomio] = useState([]);
  const [data, setData] = useState([]);
  const [puntoA, setPuntoA] = useState("");
  const [puntoB, setPuntoB] = useState("");
  const [width, height] = useWindowSize();

  useEffect(() => {
    try {
      let contenedorL = [];
      setPuntosPolinomio([])

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
          formula: `((${simplify(stringTop).toString()})/(${evaluate(stringBottom)}))`,
          coeficiente: `(${p.fx})`
        })
      }

      setLS(contenedorL)
      setPolinomial(contenedorL.map(l => `(${l.formula}*${l.coeficiente})`).join("+"))

      let dataToSet = [];
      setPuntoA(Number(d3.min(puntos, p => Number(p.x))) - 1)
      setPuntoB(Number(d3.max(puntos, p => Number(p.x))) + 1)

      let dominio;

      if (puntos.length > 1) {
        dominio = d3.range(puntoA, puntoB, 0.1);
      } else {
        dominio = d3.range(-2, 2, 0.1);
      }

      let valsFX = dominio.map(x => (
        {funcion: "fx", x: Number(x), y: evaluate(funcion.replaceAll("x", `(${x})`))}
      ))
      let valsPX = dominio.map(x => (
        {funcion: "px", x: Number(x), y: evaluate(polinomial.replaceAll("x", `(${x})`))}
      ))

      dataToSet = dataToSet.concat(valsFX).concat(valsPX)
      setData(dataToSet)

    } catch (e) {
      console.log(e)
    }
  }, [puntos, funcion, polinomial])

  return (
    <Grid rows={"2"} columns={"2"} divided>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Form>
              <Label
                color="green"
              >
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
                          if (!puntos.map(p => p.x).includes(puntoX)) {
                            setPuntos(update(puntos, {
                              $push: [
                                {
                                  x: puntoX,
                                  fx: evaluate(funcion.replaceAll("x", `(${puntoX})`))
                                }
                              ]
                            }))
                          }
                          setPuntoX("")
                        } catch (error) {
                          console.log(error)
                        }
                      }}
                    >
                      <Form.Group>
                        <Form.Input
                          name={"x"}
                          placeholder={"x"}
                          value={puntoX}
                          onChange={(e, s) => setPuntoX(s.value)}
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
            <MathComponent tex={`P(x) = ` + polinomial}/>
          </Segment>
          <Segment>
            <LineChartPoliRaphson
              reload={{width, height}}
              data={data}
              a={puntoA}
              b={puntoB}
            />
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

          <Table celled textAlign={"center"}>
            <Table.Header>
              <Table.HeaderCell>x</Table.HeaderCell>
              <Table.HeaderCell>P(x)</Table.HeaderCell>
            </Table.Header>
            <Table.Body>

              {puntosPolinomio.map(p =>
                <Table.Row>
                  <Table.Cell>{p.x}</Table.Cell>
                  <Table.Cell>{p.px}</Table.Cell>
                </Table.Row>
              )}

              <Table.Row>
                <Table.Cell colSpan={"2"}>
                  <Form
                    onSubmit={() => {
                      try {
                        if (!puntosPolinomio.map(p => p.x).includes(px)) {
                          setPuntosPolinomio(update(puntosPolinomio, {
                            $push: [
                              {
                                x: px,
                                px: evaluate(polinomial.replaceAll("x", `(${px})`))
                              }
                            ]
                          }))
                        }
                        setPX("")
                      } catch (error) {
                        console.log(error)
                      }
                    }}
                  >
                    <Form.Group>
                      <Form.Input
                        name={"px"}
                        placeholder={"x"}
                        value={px}
                        onChange={(e, s) => setPX(s.value)}
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
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PolinomioLagrange;
