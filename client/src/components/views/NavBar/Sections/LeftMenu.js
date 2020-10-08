import React from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key='mail'>
        <a href='/'>Inicio</a>
      </Menu.Item>
      <SubMenu title={<span>Cocinar</span>}>
        <MenuItemGroup title=''>
          <Menu.Item key='setting:1'>
            <a href='/Recetas'>Buscar Ingredientes</a>
          </Menu.Item>
          <Menu.Item key='setting:2'>
            <a href='/Catalogo'>Catalogo</a>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title='Item 2'>
          <Menu.Item key='setting:3'>Option 3</Menu.Item>
          <Menu.Item key='setting:4'>Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default LeftMenu
