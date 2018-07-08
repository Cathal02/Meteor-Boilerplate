import React from 'react'

const Item = props => {
  return (
    <li onClick={props.clicked}>
      <a
        className={props.active == props.title ? 'header__active' : null}
        id={props.title}
        href="#"
      >
        {props.title}
      </a>
    </li>
  )
}
export default Item
