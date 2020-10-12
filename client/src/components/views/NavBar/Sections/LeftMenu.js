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
      </SubMenu>
      <Menu.Item key='Premium'>
        <a href='/Precios'>Precios</a>
      </Menu.Item>
      <SubMenu title={<span>Herramientas</span>}>
        <MenuItemGroup title=''>
          <Menu.Item key='G_dieta'>
            <a href='/Dieta'>Generador de dieta</a>
          </Menu.Item>
          <Menu.Item key='C_profesionales'>
            <a href='/Cursos'>Cursos profesionales</a>
          </Menu.Item>
          <Menu.Item key=''>
            <a href='/Beneficios'>Beneficios</a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default LeftMenu
