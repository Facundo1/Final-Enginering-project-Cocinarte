import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './CountItems.css'
import * as constants from '../constants/constants'

const renderCount = count => {
  switch (count) {
    case 0:
      return constants.COUNT_0
    case 1:
      return constants.COUNT_1
    default:
      return count + constants.COUNT_N
  }
}

const CountItems = ({ count }) => {
  return (
    <Fragment>
      <span className='market-count'>{renderCount(count)}</span>
    </Fragment>
  )
}

CountItems.propTypes = {
  count: PropTypes.number.isRequired
}

export default CountItems
