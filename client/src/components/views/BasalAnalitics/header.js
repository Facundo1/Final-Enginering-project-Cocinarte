import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import { bmrMultiplicationFactor } from './constants'

const BmrOptions = props => (
  <DropDownMenu
    value={props.bmrDropdownValue}
    onChange={props.onBmrChange}
    labelStyle={{ fontSize: '20px', color: 'white' }}
  >
    <MenuItem
      value={0}
      label={props.bmrValueDisplay}
      primaryText='Sin ejercicio'
    />
    <MenuItem
      value={1}
      label={props.bmrValueDisplay}
      primaryText='Ejercicio muy leve'
    />
    <MenuItem
      value={2}
      label={props.bmrValueDisplay}
      primaryText='Ejercicio leve'
    />
    <MenuItem
      value={3}
      label={props.bmrValueDisplay}
      primaryText='Ejercicio moderado'
    />
    <MenuItem
      value={4}
      label={props.bmrValueDisplay}
      primaryText='Ejercicio pesado'
    />
    <MenuItem
      value={5}
      label={props.bmrValueDisplay}
      primaryText='Ejercicio muy pesado'
    />
  </DropDownMenu>
)
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      bmrDropdownValue: 0
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.onBmrChange = this.onBmrChange.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  handleClose() {
    this.setState({ open: false })
  }

  onBmrChange(event, index, value) {
    let factor = bmrMultiplicationFactor(value)
    this.setState({
      bmrDropdownValue: value
    })
    this.props.actions.modifyBmr(factor * this.props.BmrReducer.bmrValue)
  }

  render() {
    let { bmrValueModified, isInitialized } = this.props.BmrReducer,
      bmrValueRounded = Math.ceil(bmrValueModified)
    console.log(this.props.BmrReducer)
    return (
      <div>
        <AppBar
          title={'Analizador Metabolico'}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            isInitialized ? (
              <BmrOptions
                {...this.props}
                bmrDropdownValue={this.state.bmrDropdownValue}
                onBmrChange={this.onBmrChange}
                bmrValueDisplay={bmrValueRounded + ' kCal'}
              />
            ) : null
          }
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose}>
            {' '}
            <Link to='/'>
              <div className='left-side-drawer-link'> Calcular calorias</div>{' '}
            </Link>{' '}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {' '}
            <Link to='/bulking'>
              <div className='left-side-drawer-link'> Ganar masa muscular</div>{' '}
            </Link>{' '}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {' '}
            <Link to='/cutting'>
              <div className='left-side-drawer-link'> Reducir grasas</div>{' '}
            </Link>{' '}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>Dietas sugeridas</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    )
  }
}

export default Header
