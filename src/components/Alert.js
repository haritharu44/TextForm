import React from 'react'

export default function Alert(props) {
  // const height={
  //   width:"100%",
  //   height:"50px"
  // }
  return (

    props.alert && <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.msg} !
      </div>
    </div>
  )
}
