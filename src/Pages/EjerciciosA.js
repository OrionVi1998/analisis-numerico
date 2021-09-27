import React, {useState} from 'react';
import {Grid, Menu} from "semantic-ui-react";

function EjerciciosA(props) {

  const [ej, setEj] = useState(13);
  const ejercicios = [
    {
      name: "Ejercicio 13",
      value: 13
    },
    {
      name: "Ejercicio 14",
      value: 14
    },
    {
      name: "Ejercicio 15",
      value: 15
    }
  ]
  return (
    <div>
      <Menu pointing secondary>
        {
          ejercicios.map(ejercicio =>
            <Menu.Item
              onClick={() => setEj(ejercicio.value)}
              active={ejercicio.value === ej}
            >
              {ejercicio.name}
            </Menu.Item>
          )
        }
      </Menu>

      <Grid style={{height: '89vh', width: '100%'}} columns={2} textalign="center" divided>
        <Grid.Row>
          <Grid.Column>
            Yay
          </Grid.Column>
          <Grid.Column>
            Yay
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default EjerciciosA;
