import React, {useState, useEffect} from 'react';
import {Grid, Form, Segment, Divider, Label, Table, Button, Input} from "semantic-ui-react";
import {evaluate} from "mathjs";

const Biseccion = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(10);
  const [e, setE] = useState(0.05);
  const [k, setK] = useState("NA");
  const [valsX, setValsX] = useState([]);
  const [iter, setIter] = useState("");
  const [tx, setTx] = useState("");
  const [funcion, setFuncion] = useState("");

  useEffect(() => {
    try {
      let res;
      res = -Math.log2((e / (b - a)))
      setK(Math.ceil(res))
    } catch (error) {}
  }, [a, b, e]);


  const tabular = (valor) => {
    let f;
    f = funcion.replace("x", valor);
    f = evaluate(f);
    let newVals = valsX;
    if (newVals.find((v) => v.x === valor) === undefined) {
      newVals.push({x:valor, fx:f})
      setValsX(newVals)
      setTx("")
    }
  };

  return (
    <Grid divided>
      <Grid.Row>
        <Grid.Column style={{height: "50vh", width: "50vw"}}>
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
                  value={a}
                  onChange={(e, s) => setA(s.value)}
                />
                <Form.Input
                  placeholder="b"
                  name="b"
                  value={b}
                  onChange={(e, s) => setB(s.value)}
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
                  value={e}
                  onChange={(e, s) => setE(s.value)}
                />
                <Label style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                  Iteraciones Minimas
                  <Label.Detail>
                    {k}
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
              {valsX.map(vx =>
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
                    value={tx}
                    onChange={(e, s) => setTx(s.value)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Button
                    icon={"plus"}
                    color={"green"}
                    onClick={() => {
                      tabular(tx)
                    }}
                  />
                </Table.Cell>
              </Table.Row>
            </Table>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Segment style={{height: "50vh", width: "50vw"}}>
              <Table celled textAlign={"center"}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell> I </Table.HeaderCell>
                    <Table.HeaderCell> a </Table.HeaderCell>
                    <Table.HeaderCell> b </Table.HeaderCell>
                    <Table.HeaderCell> [a, b] </Table.HeaderCell>
                  </Table.Row>

                  <Table.Row colSpan={"4"}>
                    <Table.Cell colSpan={"4"}>
                      <Button
                        icon={"plus"}
                        color={"green"}
                      />
                    </Table.Cell>
                  </Table.Row>
                </Table.Header>
              </Table>
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Biseccion;
