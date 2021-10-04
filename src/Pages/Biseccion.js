import React, {useState, useEffect} from 'react';
import {Grid, Form, Segment, Divider, Label, Table, Button, Input} from "semantic-ui-react";
import {evaluate, pi} from "mathjs";

const Biseccion = () => {

  const [rangoA, setRangoA] = useState(0);
  const [rangoB, setRangoB] = useState(pi / 2);
  const [cotaError, scotaErrortE] = useState(0.05);
  const [numeroIteraciones, setNumeroIteraciones] = useState(0);
  const [valoresTabulador, setValoresTabulador] = useState([]);
  const [iteraciones, setIteraciones] = useState([]);
  const [inputTabulador, setInputTabulador] = useState("");
  const [funcion, setFuncion] = useState("cos(x)-x");

  useEffect(() => {
    try {
      let res;
      res = -Math.log2((cotaError / (rangoB - rangoA)))
      if (Math.ceil(res)!==-Infinity) {
        setNumeroIteraciones(Math.ceil(res))
      }
    } catch (error) {
    }
  }, [rangoA, rangoB, cotaError]);


  useEffect(() => {
    try {
      setIteraciones([])
      let newIteraciones;
      let count = 0;
      let fa;
      let fb;
      let middlePoint;
      let fm;
      let pointA = rangoA;
      let pointB = rangoB;
      let iterToPush;

      newIteraciones = []

      while (count !== numeroIteraciones && numeroIteraciones <= 50) {
        count += 1
        middlePoint = (pointA + pointB) / 2;

        fa = funcion.replaceAll("x", String(pointA));
        fa = evaluate(fa);
        fb = funcion.replaceAll("x", String(pointB));
        fb = evaluate(fb);
        fm = funcion.replaceAll("x", String(middlePoint));
        fm = evaluate(fm);

        iterToPush = {
          i: count,
          aa: pointA,
          fa: fa,
          falz: String((fa * fm) < 0),
          bb: pointB,
          fb: fb,
          fblz: String((fb * fm) < 0),
          rango: `[${pointA}, ${pointB}]`,
          m: middlePoint,
          fm: fm
        };

        if (Math.sign((iterToPush.fa)) === Math.sign(iterToPush.fm)) {
          pointA = middlePoint;
          pointB = iterToPush.bb;
        } else {
          pointA = iterToPush.aa;
          pointB = middlePoint;
        }

        newIteraciones.push(iterToPush)

      }
      setIteraciones(newIteraciones)
    } catch (error) {
      alert(error)
    }
  }, [funcion, rangoA, rangoB, numeroIteraciones]);

  const tabular = (valor) => {
    let f;
    f = funcion.replaceAll("x", valor);
    f = evaluate(f);
    let newVals = valoresTabulador;
    if (newVals.find((v) => v.x === valor) === undefined && funcion !== "") {
      newVals.push({x: valor, fx: f})
      setValoresTabulador(newVals)
      setInputTabulador("")
    }
  };

  return (
    <Grid rows={"2"} columns={"2"} divided>
      <Grid.Row>
        <Grid.Column style={{height: "50vh", width: "25vw"}}>
          <Segment>
            <Form>
              <label>Funcion</label>
              <Form.Input
                placeholder={"Funcion"}
                name={"funcion"}
                value={funcion}
                onChange={(e, s) => setFuncion(s.value)}
              />
              <label>Rango</label>
              <Form.Group>
                <Form.Input
                  placeholder="a"
                  name={"a"}
                  value={rangoA}
                  onChange={(e, s) => setRangoA(s.value)}
                />
                <Form.Input
                  placeholder="b"
                  name="b"
                  value={rangoB}
                  onChange={(e, s) => setRangoB(s.value)}
                />
              </Form.Group>
              <Divider/>
              <label>
                Error:
                <br/>
                (b - a) * 2^(-k) &lt;= error
                <br/>
                k &gt;= -log2(e / (b - a))
              </label>

              <Form.Group>
                <Form.Input
                  placeholder={"Error"}
                  name={"e"}
                  value={cotaError}
                  onChange={(e, s) => scotaErrortE(s.value)}
                />
                <Label style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  Iteraciones Minimas
                  <Label.Detail>
                    {numeroIteraciones}
                  </Label.Detail>
                </Label>
              </Form.Group>
            </Form>
            <Divider/>
            <Table celled textAlign={"center"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell> X </Table.HeaderCell>
                  <Table.HeaderCell> f(x) </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {/*CELLS already Found*/}
              <Table.Body>
                {valoresTabulador.map(vx =>
                  <Table.Row>
                    <Table.Cell>{vx.x}</Table.Cell>
                    <Table.Cell>{vx.fx}</Table.Cell>
                  </Table.Row>
                )}
                <Table.Row>
                  {/*Tabulator Button*/}
                  <Table.Cell>
                    <Input
                      placeholder={"Valor de X"}
                      value={inputTabulador}
                      onChange={(e, s) => setInputTabulador(s.value)}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      icon={"plus"}
                      color={"green"}
                      onClick={() => {
                        tabular(inputTabulador)
                      }}
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Segment style={{width: "100vw"}}>
          <Table celled textAlign={"center"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> I </Table.HeaderCell>
                <Table.HeaderCell> a </Table.HeaderCell>
                <Table.HeaderCell> f(a) </Table.HeaderCell>
                <Table.HeaderCell> f(a)&lt;0 </Table.HeaderCell>
                <Table.HeaderCell> b </Table.HeaderCell>
                <Table.HeaderCell> f(b) </Table.HeaderCell>
                <Table.HeaderCell> f(b)&lt;0 </Table.HeaderCell>
                <Table.HeaderCell> [a,b] </Table.HeaderCell>
                <Table.HeaderCell> m </Table.HeaderCell>
                <Table.HeaderCell> f(m) </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {iteraciones.map(i =>
                <Table.Row>
                  <Table.Cell>{i.i}</Table.Cell>
                  <Table.Cell>{i.aa}</Table.Cell>
                  <Table.Cell>{i.fa}</Table.Cell>
                  <Table.Cell>{i.falz}</Table.Cell>
                  <Table.Cell>{i.bb}</Table.Cell>
                  <Table.Cell>{i.fb}</Table.Cell>
                  <Table.Cell>{i.fblz}</Table.Cell>
                  <Table.Cell>{i.rango}</Table.Cell>
                  <Table.Cell>{i.m}</Table.Cell>
                  <Table.Cell>{i.fm}</Table.Cell>
                </Table.Row>
              )}
              <Table.Row>
                <Table.Cell colSpan={"10"}>
                  <Button
                    icon={"plus"}
                    color={"green"}
                    onClick={() => setNumeroIteraciones(numeroIteraciones+1)}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Grid.Row>
    </Grid>
  );
};

export default Biseccion;
