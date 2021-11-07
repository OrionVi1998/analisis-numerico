import React, {useEffect, useState} from 'react';
import {Button, Input, Segment, Table} from "semantic-ui-react";

function Gauss() {

  const [initMat, setInitMat] = useState([
    [-2, 0, -2, -10],
    [2, 2, 4, 16],
    [0, 1, 0, 0]
  ]);
  const [nMat, setNMat] = useState(3);
  const [resMat, setResMat] = useState([]);

  useEffect(() => {
    try {
      let newMat = [];
      for (let i = 0; nMat > i; i++) {
        let matAdd = [];
        for (let j = 0; nMat > j; j++) {
          matAdd.push('')
        }
        matAdd.push('')
        newMat.push(matAdd)
      }
      setInitMat(newMat);
      setResMat(newMat);
    } catch (e) {
      console.log(e)
    }
  }, [nMat]);


  return (
    <Segment>

      <Input
        label={`Tamaño: ${nMat}*${nMat}`}
        value={nMat}
        min={'2'}
        max={'5'}
        type={'range'}
        onChange={(e, {value}) => setNMat(Number(value))}
      />

      <Table celled>
        <Table.Header>
          {initMat.map( (val, index) =>
            <Table.HeaderCell>
              Columna: {index}
            </Table.HeaderCell>
          )}
        </Table.Header>

        <Table.Body>

          {initMat.map( (val, i1) =>
            <Table.Row>
              {val.map((val2, i2) => {
                return (
                  <Table.Cell>
                    <Input
                      value={initMat[i1][i2]}
                      placeholder={i2 !== nMat ? `(${i1},${i2})`: `b${i1}`}
                      onChange={(e, {value}) => {
                        let newMat = JSON.parse(JSON.stringify(initMat))
                        newMat[i1][i2] = value
                        setInitMat(newMat)
                      }}
                    />
                  </Table.Cell>
                )
              })}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Table celled>
        <Table.Header>
          {resMat.map( (val, index) =>
            <Table.HeaderCell>
              Columna: {index}
            </Table.HeaderCell>
          )}
        </Table.Header>

        <Table.Body>
          {resMat.map( (val, i1) =>
            <Table.Row>
              {val.map((val2, i2) => {
                return (
                  <Table.Cell>
                    {val2}
                  </Table.Cell>
                )
              })}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Button
        fluid
        color={'green'}
        content={'Elminacion de Gauss'}
        onClick={() => {
          try {
            setResMat(gauss(initMat))
          } catch (e) {
            console.log(e)
          }
        }}
      />

    </Segment>
  );
}

function gauss(matInit) {
  let matrizDiagonal = JSON.parse(JSON.stringify(matInit));

  let n = matrizDiagonal.length;
  let i, j, k = 0;

  for (i = 0; i < n; i++) {

    for (j = i; j < n; j++) {
      if (i !== j) {
        let pivote = matrizDiagonal[j][i] / matrizDiagonal[i][i];
        for (k = 0; k <= n; k++) {
          matrizDiagonal[j][k] = matrizDiagonal[j][k] - (matrizDiagonal[i][k]) * pivote;
        }
      }
    }
  }
  return matrizDiagonal;
}

export default Gauss;
