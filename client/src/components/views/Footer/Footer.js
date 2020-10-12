import React from 'react'
import { Icon } from 'antd'

function Footer() {
  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: 'bolder'
      }}
    >
      <p>
        {' '}
        |Cocinarte| es una marca registrada. Todos los derechos reservados 2020
        --- Av Ovidio Lagos 338, Rosario, Santa Fe ,Argentina --- (0341)
        15468745
      </p>
    </div>
  )
}

export default Footer
