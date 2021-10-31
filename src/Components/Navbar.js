import React from 'react';
import {Menu} from "semantic-ui-react";

function Navbar(props) {

  const items = [
    {name: "Home", link: "/"},
    {name: "Ejercicios: 13, 14, 15", link: "/ejercicios_a"},
    {name:"Biseccion", link:"/biseccion"},
    {name:"Punto Fijo", link: "/punto_fijo"},
    {name:"Newton Raphson", link: "/newton_raphson"},
    {name:"Polinomio de Lagrange", link: "/polinomio_lagrange"},
    {name:"Metodos de Los Trapecios", link: "/metodo_trapecios"}
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
