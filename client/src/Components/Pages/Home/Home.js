import React from 'react'
import Jumbotron from '../../components/Jumbotron'
import "./Home.css"

let homeTitle = "Hi, I'm Mitch!"
let homeLead = "I'm a software developer with strong critical thinking skills and interest in efficient design."
let homeGate = "Please feel free to browse my work"

class Books extends React.Component{

    render(){
        return(
            //homepage is just gonna be this jumbotron; I want use to be extremely simple and easy
            //I can add some more information about my skillset eventually.
            < Jumbotron title = {homeTitle} lead = {homeLead} gate = {homeGate}/>
        )
    }
}

export default Books;