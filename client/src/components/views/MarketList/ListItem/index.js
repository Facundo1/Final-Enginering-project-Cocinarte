import React from 'react'
import PropTypes from 'prop-types'
import './ListItem.css'
import deleteIcon from '../MarketAssets/deleteIcon.png'

const ListItem = ({ item, handleRemove }) => {
  return (
    <div className='market-item'>
      <div className='market-name'>{item.name}</div>
      <div className='market-deleteSpan'>
        <img
          className='market-delete'
          src={deleteIcon}
          alt='delete'
          onClick={() => {
            if (
              window.confirm(
                '¿Seguro que deseas eliminar este producto de la lista?'
              )
            )
              handleRemove(item.id)
          }}
        />
      </div>
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default ListItem
