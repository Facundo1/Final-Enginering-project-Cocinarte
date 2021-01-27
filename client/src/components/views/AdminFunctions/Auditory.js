import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Auditory extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>|Auditoria de pagos|</h1>
          <a href='https://dashboard.stripe.com/test/dashboard' target='_blank'>
            <button className='btn btn-info  text-white rounded h5'>
              Ver...
            </button>
          </a>
        </div>
      </div>
    )
  }
}
