import React from "react"
import "./Card.css"

let Card = function (props) {

    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-8">
                        <img src={props.image} class="card-img" alt="..." ></img>
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <a href={props.link}><h5>{props.title}</h5></a>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card