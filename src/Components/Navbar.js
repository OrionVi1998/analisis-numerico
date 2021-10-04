import React from 'react';
import {Menu} from "semantic-ui-react";

function Navbar(props) {

  const items = [
    {name: "Home", link: "/"},
    {name: "Ejercicios: 13, 14, 15", link: "/ejercicios_a"},
    {name:"Biseccion", link:"/biseccion"},
    {name:"Punto Fijo", link: "/punto_fijo"}
  ]

  return (
    <Menu inverted style={{height: '5%'}}>
      {
        items.map(i =>
          <Menu.Item
            name={i.name}
            href={i.link}
          >
            {i.name}
          </Menu.Item>
        )
      }
    </Menu>
  );
}

export default Navbar;
