/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Menu } from 'antd'

import axios from 'axios'
import { USER_SERVER } from '../../../Config'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push('/login')
      } else {
        alert('Log Out Failed')
      }
    })
  }

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key='mail'>
          <a href='/login'>Entrar</a>
        </Menu.Item>
        <Menu.Item key='app'>
          <a href='/register'>Registrarse</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item>
          <div className='containerLogin'>
            <div className='loginName btn btn-info  text-white rounded h4 text-left'>
              <p>{user.userData && user.userData.name}</p>
            </div>
            <div className='loginAccountType btn btn-info  text-white rounded h4 text-left'>
              <p>{user.userData && user.userData.accountType}</p>
            </div>
          </div>
        </Menu.Item>

        <SubMenu
          title={
            <span>
              <img
                id='userAvatar'
                src={user.userData && user.userData.image}
              ></img>
            </span>
          }
        >
          <MenuItemGroup title=''>
            <Menu.Item key='setting:3'>
              <a href='/FavoritePage'>Mis recetas favoritas </a>
            </Menu.Item>
            <Menu.Item key='setting:2'>
              <a href='/CambiarContraseña'>Cambiar contraseña</a>
            </Menu.Item>
            <Menu.Item key='logout'>
              <a className='containerLogout' onClick={logoutHandler}>
                Logout
              </a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

export default withRouter(RightMenu)
