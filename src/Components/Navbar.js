import React from 'react';
import {Menu} from "semantic-ui-react";

function Navbar(props) {

  const items = [
    {name: "Home", link: "/"},
    {name: "Ejercicios: 13, 14, 15", link: "/ejercicios_a"}
  ]

  return (
    <Menu inverted style={{height: '5vh'}}>
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
