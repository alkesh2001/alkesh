import React from 'react'

function Alert(props) {

  const capital = (word)=>{     //it is just normal function to upper case value of success only this work 
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
  
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
    </div>

  )
}

export default Alert
