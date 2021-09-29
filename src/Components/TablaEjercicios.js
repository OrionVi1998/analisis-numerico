import React, {useEffect, useState} from 'react';
import {Table} from "semantic-ui-react";

function TablaEjercicios({ej}) {

  const [data, setData] = useState([]);

  useEffect(() => {

    if (ej === 13) {
      setData(ejercicio13(30))
    }
    if (ej === 14) {
      setData(ejercicio14(30))
    }
    if (ej === 15) {
      setData(ejercicio15(25))
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
          Ea: Math.abs((va - Math.exp(0))),
          Er: Math.abs((va - Math.exp(0))) / Math.exp(0)
        }
      );
      iter -= 1
    }
    return res.reverse();
  }

  const ejercicio14 = (iter) => {
    let res = [];
    let h;
    let va;
    /*{i, h, VV, VA, EA, ER}*/
    while (iter !== 0) {
      h = Math.pow(2, -iter)
      va = (Math.exp(h) - Math.exp(-h)) / (2 * h)

      res.push(
        {
          i: iter,
          h: h,
          vv: Math.exp(0),
          va: va,
          Ea: Math.abs((va - Math.exp(0))),
          Er: Math.abs((va - Math.exp(0))) / Math.exp(0)
        }
      );
      iter -= 1
    }
    return res.reverse();
  }

  const ejercicio15 = (nIter) => {

    let res = [];

    const iterRec = (iter) => {
      if (iter === 0) {
        return Math.log(1.1);
      } else {
        return (1 / iter) - 10 * iterRec(iter - 1)
      }
    };

    while (nIter !== 0) {
      res.push(
        {
          i: nIter,
          h: "N/A",
          vv: iterRec(nIter),
          va: "N/A",
          Ea: "N/A",
          Er: "N/A"
        }
      );
      nIter -= 1
    }

    res.push({
      i: 0,
      h: "N/A",
      vv: Math.log(1.1),
      va: "N/A",
      Ea: "N/A",
      Er: "N/A"
    })

    return res.reverse();
  };




  return (
    <Table celled style={{width: '100%'}}>
      <Table.Header>
        <Table.Row>
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
