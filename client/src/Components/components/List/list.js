import React from 'react'
import "./list.css"


let List = function (props) {
    return (
            <div className="list-overflow-container">
            <h3 className = "listTitle">All Projects</h3>
                <ul className="list-group list-group-flush">{props.children}</ul>
            </div>)
}

export default List