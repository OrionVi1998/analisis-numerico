import React, {useState, useEffect} from 'react';
import {Form, Grid, Label, Segment} from "semantic-ui-react";
import LineChartNoWrapper from "../Components/LineChartNoWrapper";
import {derivative, evaluate} from "mathjs";
import * as d3 from "d3";


const PuntoFijo = () => {

  const [data, setData] = useState([]);
  const [funcionX, setFuncionX] = useState("(x^2)-(3*x)-(1)");
  const [funcionG, setFuncionG] = useState("((x^2)-1)/3");
  // const [funcionDeriv, setFuncionDeriv] = useState(derivative("(x^2)-4", "x").toString());
  const [puntoA, setPuntoA] = useState(-1);
  const [puntoB, setPuntoB] = useState(0);

  useEffect(() => {
    try {
      let dataToSet = [];
      // setFuncionDeriv(derivative(funcionX, "x").toString())

      console.log(funcionX.replaceAll("x", -0.5))

      let dominio = d3.range(puntoA, puntoB, 0.05)
      let valsFX = dominio.map(x => (
        {funcion:"fx", x: Number(x), y:evaluate(funcionX.replaceAll("x", `(${x})`))}
      ))
      let valsGX = dominio.map(x => (
        {funcion:"gx", x: Number(x), y:evaluate(funcionG.replaceAll("x", `(${x})`))}
      ))
      let valoresXY = dominio.map(x => (
        {funcion:"xy", x: Number(x), y:Number(x)}
      ))

      dataToSet = dataToSet.concat(valsFX).concat(valsGX).concat(valoresXY)

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
            <LineChartNoWrapper data={data} rango={{xa:puntoA, xb:puntoB}}/>
          </Segment>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
};

export default PuntoFijo;
