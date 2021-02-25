import React, { Component, Fragment } from 'react'
import CountItems from '../CountItems'
import List from '../List'
import ModalAddItem from '../ModalAddItem'
import './Container.css'
import * as constants from '../constants/constants'
import loading from '../MarketAssets/loading.gif'
import { removeItem, addItem, getItems } from '../remote/api'

class Container extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      name: '',
      showModalAddItem: false,
      showLoading: false
    }
  }

  componentDidMount() {
    this.showLoading()

    getItems().then(response =>
      this.setState({
        items: response,
        showLoading: false
      })
    )
  }

  handleRemove = id => {
    this.showLoading()

    removeItem(id).then(response =>
      this.setState({
        items: response,
        showLoading: false
      })
    )
  }

  handleAddItem = () => {
    const { name } = this.state
    this.showLoading()

    addItem(name).then(response =>
      this.setState({
        items: response,
        showLoading: false
      })
    )

    this.hideModalAddItem()
  }

  showModalAddItem = () => {
    this.setState({ showModalAddItem: true })
  }

  hideModalAddItem = () => {
    this.setState({
      showModalAddItem: false,
      name: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  showLoading = () => {
    this.setState({
      showLoading: true
    })
  }

  renderDataList = () => {
    const { items } = this.state
    return (
      <>
        <Fragment>
          <CountItems count={items.length} />
          <List
            items={items}
            handleRemove={this.handleRemove}
            handleAdd={this.handleAdd}
          />
        </Fragment>
      </>
    )
  }

  renderLoading = () => {
    return (
      <div className='divImg'>
        <img className='loading' src={loading} alt='Loading' />
      </div>
    )
  }

  render() {
    const { showLoading, showModalAddItem, name } = this.state
    return (
      <div className='market-container'>
        <div className='market-box'>
          <br></br>
          <br></br>

          <div className='market-title'>{constants.TITLE_CONTAINER}</div>
          {showLoading ? this.renderLoading() : this.renderDataList()}
          <Fragment>
            <button
              className='market-button'
              onClick={() => this.showModalAddItem()}
            >
              {constants.ADD_ITEM}
            </button>
          </Fragment>
          <ModalAddItem
            show={showModalAddItem}
            name={name}
            handleChange={this.handleChange}
            handleAddItem={this.handleAddItem}
            hideModalAddItem={this.hideModalAddItem}
          />
        </div>
      </div>
    )
  }
}

export default Container
