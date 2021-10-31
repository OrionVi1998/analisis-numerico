import React, {useEffect, useState} from 'react';
import {Grid, Header, Input, Label, Loader, Segment, Table} from "semantic-ui-react";
import {MathComponent} from "mathjax-react";
import {evaluate} from "mathjs";
import * as d3 from "d3";


function MetodosTrapecios(props) {

  const [puntos, setPuntos] = useState([
    {x: 1, y: 8},
    {x: 1.25, y: 9.1},
    {x: 1.5, y: 10.25},
    {x: 1.75, y: 11.56},
    {x: 2, y: 13}
  ]);

  const [equacion, setEquacion] = useState('x^2+2x+5');
  const [n, setN] = useState(4);
  const [h, setH] = useState(0.25);
  const [minPoint, setMinPoint] = useState(1)
  const [maxPoint, setMaxPoint] = useState(2);

  const [res, setRes] = useState({simple: "Na", compuesto: "Na"});

  useEffect(() => {
    setRes(
      {
        simple: evaluate(`((${getMax().x} - ${getMin().x})*(${getMin().y}+${getMax().y}))/2`),
        compuesto: evaluate(`(${h}/2)*(${getMin().y} + 2*(${puntos.map(p => p.y).slice(1, puntos.length - 1).join(' + ')}) + ${getMax().y})`)
      }
    )
  }, [])

  useEffect(() => {
    let newH = (maxPoint - minPoint) / n
    setH(newH)
  }, [maxPoint, minPoint, n])

  useEffect(() => {
    try {
      let newPuntos = []
      let lastX = minPoint;

      newPuntos.push({
        x: minPoint,
        y: evaluate(equacion.replaceAll('x', `(${minPoint})`))
      })

      while (newPuntos.length !== n + 1) {
        newPuntos.push({
          x: lastX + h,
          y: evaluate(equacion.replaceAll('x', `(${lastX + h})`))
        })
        lastX += h;
      }

      setPuntos(newPuntos)

    } catch (err) {
      console.log(err)
    }
  }, [equacion, h])

  useEffect(() => {
    setRes(
      {
        simple: evaluate(`((${getMax().x} - ${getMin().x})*(${getMin().y}+${getMax().y}))/2`),
        compuesto: evaluate(`(${h}/2)*(${getMin().y} + 2*(${puntos.map(p => p.y).slice(1, puntos.length - 1).join(' + ')}) + ${getMax().y})`)
      }
    )
  }, [puntos]);



  function getMin() {
    return {x: d3.min(puntos, p => p.x), y: d3.min(puntos, p => p.y)}
  }

  function getMax() {
    return {x: d3.max(puntos, p => p.x), y: d3.max(puntos, p => p.y)}
  }

  return (
    <div>
      <Grid divided columns={'2'}>
        <Grid.Row>
          <Grid.Column width={'16'}>
            <Segment fluid>
              <Input
                label={'Equation: f(x):'}
                placeholder={'f(x)'}
                value={equacion}
                onChange={(e, {value}) => setEquacion(value)}
              />
              <Input
                type='range'
                min={'1'}
                max={'15'}
                label={`n: ${n}`}
                placeholder={'n subdivisones'}
                value={n}
                onChange={(e, {value}) => setN(Number(value))}
              />
              <Input
                label={'Minimo'}
                placeholder={'X Minimo'}
                value={minPoint}
                onChange={(e, {value}) => setMinPoint(value)}
              />
              <Input
                label={'Maximo'}
                placeholder={'X Maximo'}
                value={maxPoint}
                onChange={(e, {value}) => setMaxPoint(value)}
              />
              <Label>
                h: (b-a)/n : {getMax().x - getMin().x}/{n} : {(getMax().x - getMin().x) / n}
              </Label>
              <Table celled>
                <Table.Header>
                  <Table.HeaderCell>
                    x
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    y
                  </Table.HeaderCell>
                </Table.Header>

                <Table.Body>
                  {puntos.map(p =>
                    <Table.Row>
                      <Table.Cell>
                        {p.x}
                      </Table.Cell>
                      <Table.Cell>
                        {p.y}
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>

            <Segment>
              <Header>
                Metodo de Trapecios Simple:
              </Header>
              <MathComponent tex={'\\frac{((b-a)*(f(a)+f(b)))}{2}'}/>
              <MathComponent tex={`\\frac{((${getMax().x} - ${getMin().x})*(${getMin().y}+${getMax().y}))}{2} =`}/>
              <Header textAlign="center" as={'h4'}>
                {res.simple}
              </Header>
            </Segment>

            }


          </Grid.Column>

          <Grid.Column>

            <Segment>
              <Header>
                Metodo de trapecios Compuestos
              </Header>
              <MathComponent tex={`\\Sigma_{i=1}^${n} (\\frac{h}{2}*(y_{i-1} + y_i))=`}/>
              {
                <MathComponent tex={
                  `\\frac{${h}}{2} * (${getMin().y} + 2*(${puntos.map(p => p.y).slice(1, puntos.length - 1).join(' + ')}) + ${getMax().y})`
                }/>
              }
              <Header textAlign="center" as={'h4'}>
                {res.compuesto}
              </Header>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default MetodosTrapecios;
