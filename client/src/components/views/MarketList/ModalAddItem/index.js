import React, { Fragment } from 'react'
import './ModalAdd.css'
import PropTypes from 'prop-types'
import * as constants from '../constants/constants'

const ModalAddItem = ({
  show,
  name,
  handleChange,
  handleAddItem,
  hideModalAddItem
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className='containerModal'>
          <h4 className='modal-h4'>{constants.ADD_ITEM}</h4>
          <div className='spanInput'>
            <input name='name' value={name} onChange={handleChange} />
          </div>
          <Fragment>
            <button className='actionButtonClose' onClick={hideModalAddItem}>
              {constants.CANCEL}
            </button>
            <button
              className={
                name.trim().length < 1 ? 'actionButton empty' : 'actionButton'
              }
              onClick={handleAddItem}
              disabled={name.trim().length < 1}
            >
              {constants.ADD}
            </button>
          </Fragment>
        </div>
      </section>
    </div>
  )
}

ModalAddItem.propTypes = {
  show: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  hideModalAddItem: PropTypes.func.isRequired
}

export default ModalAddItem
