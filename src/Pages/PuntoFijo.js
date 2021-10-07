import React, {useState, useEffect} from 'react';
import {Form, Grid, Label, Segment} from "semantic-ui-react";
import LineChartNoWrapper from "../Components/LineChartNoWrapper";
import {derivative, evaluate} from "mathjs";
import * as d3 from "d3";


const PuntoFijo = () => {

  const [data, setData] = useState([]);
  const [funcionX, setFuncionX] = useState("(x^2)-4");
  const [funcionG, setFuncionG] = useState("x - (5/x)");
  // const [funcionDeriv, setFuncionDeriv] = useState(derivative("(x^2)-4", "x").toString());
  const [puntoA, setPuntoA] = useState(0);
  const [puntoB, setPuntoB] = useState(10);

  useEffect(() => {
    try {
      let dataToSet = [];
      // setFuncionDeriv(derivative(funcionX, "x").toString())

      let dominio = d3.range(puntoA, puntoB, 0.2)
      let valsFX = dominio.map(x => (
        {funcion:"fx", x: x, y:evaluate(funcionX.replaceAll("x", x))}
      ))
      let valsGX = dominio.map(x => (
        {funcion:"gx", x: x, y:evaluate(funcionG.replaceAll("x", x))}
      ))
      let valoresXY = dominio.map(x => (
        {funcion:"xy", x: x, y:x}
      ))

      dataToSet = dataToSet.concat(valsFX).concat(valsGX).concat(valoresXY)

      console.log(dataToSet)
      setData(dataToSet)

    } catch (error) {}
  }, [funcionX, funcionG, puntoA, puntoB]);


  return (
    <Grid rows={"2"} columns={"2"} divided>

      <Grid.Row>
        <Grid.Column style={{width: "35vw"}}>
          <Segment>
            <Form>
              <label>F(x)</label>
              <Form.Input
                placeholder={"F(x)"}
                value={funcionX}
                onChange={(e, s) => setFuncionX(s.value)}
              />
              {/*<Label>*/}
              {/*  Derivada de F(x): {funcionDeriv}*/}
              {/*</Label>*/}
              <br/>
              <br/>
              <label>G(x)</label>
              <Form.Input
                placeholder={"G(x)"}
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
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <LineChartNoWrapper data={data}/>
          </Segment>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};

export default PuntoFijo;
