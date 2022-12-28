import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const ErrorScreen = ({variant,children}) => {

    const [show, setShow] = useState(true);


  return (
    <div className='error-screen'>
        <Alert key={variant} variant={variant} style={{'fontSize': '1rem', 'fontWeight': 600}}>
          {children}
        </Alert>
    </div>
  )
}

export default ErrorScreen