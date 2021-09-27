import React from 'react';
import {Table} from "semantic-ui-react";

function TablaEjercicos(props) {


  return (
    <Table celled>
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
        {/*{i, h, VV, VA, EA, ER}*/}
      </Table.Body>
    </Table>
  );
}

export default TablaEjercicos;
