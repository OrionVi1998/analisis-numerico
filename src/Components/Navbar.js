import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Navbar(props) {

  const items = [
    {name: "Home", link: "/"},
    {name: "Ejercicios: 13, 14, 15", link: "/ejercicios_a"},
    {name: "Biseccion", link: "/biseccion"},
    {name: "Punto Fijo", link: "/punto_fijo"},
    {name: "Newton Raphson", link: "/newton_raphson"},
    {name: "Polinomio de Lagrange", link: "/polinomio_lagrange"},
    {name: "Metodos de Los Trapecios", link: "/metodo_trapecios"},
    {name: "Metodo de Romberg", link: "/metodo_romberg"},
    {name: "Metodo de Gauss", link: "/metodo_gauss"},

  ]

  return (
    <Menu inverted style={{height: '5%'}}>
      {
        items.map(i =>
          <Menu.Item
            as={Link} to={i.link}
            name={i.name}
          >
            {i.name}
          </Menu.Item>
        )
      }
      <Menu.Item
        onClick={() => window.open('https://github.com/OrionVi1998/analisis-numerico', '_self')}
        position={'right'}
      >
        <Icon name={'github'} />
        Desarollado por OrionVi1998
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;
