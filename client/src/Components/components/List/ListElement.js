import React from 'react'
import Button from '../Button'
import "./listElement.css"


let cardElement = function (props) {
    return (
        <div>
            <li className="list-group-item" >
                {props.children}
                <Button link={props.buttonLink} title="Checkout the project" />
            </li>
        </div>
    )
}

export default cardElement


