import React from 'react'
import "./listVanilla.css"

let listVanilla = function (props) {
    return (
            <div className = "listVanilla">
            <h3 className = "listTitle">{props.title}</h3>
                <ul className="list-group">{props.children}</ul>
            </div>)
}

export default listVanilla;