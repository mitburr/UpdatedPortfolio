import React from 'react'


let button = function(props){

    return (<a class="btn btn-primary btn-lg" href={props.link} role="button" id = "projectButton">{props.title}</a>)
}

export default button