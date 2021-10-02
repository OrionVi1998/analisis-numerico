import React, {useState} from 'react';
import {Grid, Form, Segment} from "semantic-ui-react";

const Biseccion = () => {

  const [a, setA] = useState("");
  const [b, setB] = useState("");
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
                onChange={(e,s) => setFuncion(s.value)}
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
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Biseccion;
