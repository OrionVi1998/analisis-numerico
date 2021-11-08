import React, {useEffect, useState} from 'react';
import {Grid, Input, Segment, Table} from "semantic-ui-react";
import {evaluate} from "mathjs";
import * as d3 from "d3";

const range = (start, end, length = end - start + 1) =>
  Array.from({length}, (_, i) => start + i)

function MetodoRomberg() {

  const [puntos, setPuntos] = useState([
    [],
    [],
    [],
    []
  ]);

  const [equacion, setEquacion] = useState('x^2+2x+5');
  const [maxDepth, setMaxDepth] = useState(4);
  const [minPoint, setMinPoint] = useState(1);
  const [maxPoint, setMaxPoint] = useState(2);

  useEffect(() => {
    setPuntos(Romberg(maxDepth, minPoint, maxPoint, equacion))
  }, [])


  useEffect(() => {
    try {
      console.log(Romberg(maxDepth, minPoint, maxPoint, equacion))
      setPuntos(Romberg(maxDepth, minPoint, maxPoint, equacion));
    } catch (e) {
      console.error(e)
    }
  }, [equacion, maxDepth, maxPoint, minPoint])

  return (
    <div>
      <Grid divided columns={'3'}>
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
                disabled={true}
                min={'1'}
                max={'8'}
                label={`Profundidad: ${maxDepth}`}
                placeholder={'max prfundidad'}
                value={maxDepth}
                onChange={(e, {value}) => setMaxDepth(Number(value * 2))}
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
              <Table celled>
                <Table.Header>
                  {range(0, maxDepth - 1).map(n =>
                    <Table.HeaderCell>
                      n({Math.pow(2, n)})
                    </Table.HeaderCell>
                  )}
                </Table.Header>

                <Table.Body>
                  {range(0, maxDepth - 1).map(n =>
                    <Table.Row>
                      {puntos[n].map(p => <Table.Cell>{p}</Table.Cell>)}
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>


      </Grid>
    </div>
  );
}


function Trapecio(minPoint, maxPoint, n, ecuacion) {
  let h = (maxPoint - minPoint) / n


  let newPuntos = [];
  let lastX = minPoint;


  newPuntos.push({
    x: minPoint,
    y: evaluate(ecuacion.replaceAll('x', `(${minPoint})`))
  })

  while (newPuntos.length !== n + 1) {
    newPuntos.push({
      x: lastX + h,
      y: evaluate(ecuacion.replaceAll('x', `(${lastX + h})`))
    })
    lastX += h;
  }

  function getMin() {
    return {x: d3.min(newPuntos, p => p.x), y: d3.min(newPuntos, p => p.y)}
  }

  function getMax() {
    return {x: d3.max(newPuntos, p => p.x), y: d3.max(newPuntos, p => p.y)}
  }

  if (newPuntos.length === 2) {
    return evaluate(`(${h}/2)*(${getMin().y} +  ${getMax().y})`)
  } else {
    return evaluate(`(${h}/2)*(${getMin().y} + 2*(${newPuntos.map(p => p.y).slice(1, newPuntos.length - 1).join(' + ')}) + ${getMax().y})`)
  }
}


function Romberg(profundidad, minPoint, maxPoint, eq) {

  let resArray = range(0, profundidad - 1).map(() => [])

  range(0, profundidad - 1).map(n => {
    resArray[n] = range(0, n)
  })

  resArray[resArray.length - 1] = range(0, profundidad - 1).map(n => {
    return Trapecio(Number(minPoint), Number(maxPoint), Math.pow(2, n), eq)
  })

  // console.log(resArray)

  for (let i = resArray.length - 2; i !== -1; i--) {
    // console.log(resArray[i])

    resArray[i] = resArray[i].map(n => {
      // console.log(`${resArray[i + 1][n]}, ${resArray[i + 1][n + 1]}`)
      let k = profundidad - i;

      // eslint-disable-next-line no-eval
      return eval(`(((4 ^ (${k} - 1)) * (${resArray[i + 1][n + 1]})) - (${resArray[i + 1][n]})) / ((4 ^ (${k} - 1)) - 1)`)
    })

    // console.log(resArray[i])

  }

  // console.log(resArray)

  return resArray.reverse();

}


export default MetodoRomberg;
