import React, {useEffect, useState} from 'react';
import {Table} from "semantic-ui-react";

function TablaEjercicios({ej}) {

  const [data, setData] = useState([]);

  useEffect(() => {

    if (ej === 13) {
      setData(ejercicio13(30))
    }

  }, [ej])


  const ejercicio13 = (iter) => {
    let res = [];
    let h;
    let va;
    /*{i, h, VV, VA, EA, ER}*/
    while (iter !== 0) {
      h = Math.pow(2, -iter)
      va = (Math.exp(h) - Math.exp(0)) / h

      res.push(
        {
          i: iter,
          h: h,
          vv: Math.exp(0),
          va: va,
          Ea: Math.abs(Math.exp(0) - va),
          Er: Math.abs(Math.exp(0) - va) / Math.exp(0)
        }
      );
      iter -= 1
    }
    return res.reverse();
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {}
          <Table.HeaderCell>i</Table.HeaderCell>
          <Table.HeaderCell>h</Table.HeaderCell>
          <Table.HeaderCell>Valor Verdadero</Table.HeaderCell>
          <Table.HeaderCell>Valor approx.</Table.HeaderCell>
          <Table.HeaderCell>Error Absoluto</Table.HeaderCell>
          <Table.HeaderCell>Error Relativo</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(iter =>
          <Table.Row>
            <Table.Cell>{iter.i}</Table.Cell>
            <Table.Cell>{iter.h}</Table.Cell>
            <Table.Cell>{iter.vv}</Table.Cell>
            <Table.Cell>{iter.va}</Table.Cell>
            <Table.Cell>{iter.Ea}</Table.Cell>
            <Table.Cell>{iter.Er}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

export default TablaEjercicios;
