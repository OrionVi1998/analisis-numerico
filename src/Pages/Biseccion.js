import React, {useState} from 'react';
import {Grid, Form, Segment, Divider, Label, Table} from "semantic-ui-react";

const Biseccion = () => {

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [e, setE] = useState("");
  const [iter, setIter] = useState("NA");
  const [funcion, setFuncion] = useState("");

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
                (b-a)  * 2^-k &lt;= error
              </label>

              <Form.Group>
                <Form.Input
                  placeholder={"Error"}
                  name={"e"}
                  value={e}
                  onChange={(e, s) => setE(s.value)}
                />
                <Label style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                  Iteraciones Minimas
                  <Label.Detail>
                    {iter}
                  </Label.Detail>
                </Label>
              </Form.Group>
            </Form>
            <Divider/>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell> X </Table.HeaderCell>
                  <Table.HeaderCell> f(x) </Table.HeaderCell>
                </Table.Row>

                {/*CELLS already Found*/}

                <Table.Row>
                  {/*Tabulator Button*/}
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Header>
            </Table>
          </Segment>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Biseccion;
