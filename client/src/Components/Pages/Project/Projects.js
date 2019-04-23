import React from 'react'
import API from '../../Utils/API';
import List from '../../components/List/list'
import Card from '../../components/Card'
import ListVanilla from "../../components/List/listVanilla"
import ListElement from '../../components/List/ListElement'
import { Col, Row, Container } from "../../components/Grid";
import projectRepos from "../../../Assets/projectRepos.json"
import "./Project.css"


let projectsArray = [
    {
        "title": "The Mealler Report",
        "link": "https://github.com/TashaShrader/MealSuggestions",
        "image": "https://raw.githubusercontent.com/medcoguy/GitTesting/master/images/login.PNG",
        description: "This application takes meals that somebody has eaten, store them in a database, and then makes nutritional suggestions for the day."
    },
    {
        "title": "Quick Recipes",
        "link": "https://github.com/Lgeoffrion/GroupProject1",
        "image": "https://raw.githubusercontent.com/Lgeoffrion/GroupProject1/master/assets/images/appFace.png",
        description: "This application takes in ingredients or recipes, and then offers recipe suggestions and wines to pair with the given input."

    },
    {
        "title": "Chores",
        "link": "https://github.com/mitburr/chores",
        "image":"https://user-images.githubusercontent.com/46298501/54443544-cc0c8e80-470e-11e9-97f2-ba0a5a9bc2b2.png",
        description: "Chores aims to create a chore tracking application for a family. Parents and children make accounts, and parents assign and manage chores for each child."
    }
]


class Projects extends React.Component {
    //repos will be the array of objects representing every repo. I will want to filter it to display more reasonably.
    state = {
        repos: []
    }
    //display all repos on load
    //I'll filter what this does later -- ideally I'd first show projects I'm proud of and have other projects be accessible differently. 
    //eventually I'll want to categorize the projects by technologies they showcase, difficulty, and completeness.
    //I wonder if there's a way to do this programatically...
    componentDidMount() {
        this.loadRepos();
    }



    //fill the repo array
    loadRepos = () => {
        API.gitRepos().then(res => {
            this.setState({ repos: res.data })
            console.log(this.state.repos);
        })
            .catch(err => {
                if (err) console.log(err);
            })
    };


    render() {

        return (
            <Container fluid>
                <Row>
                    <Col size = "md">
                        <ListVanilla>
                            {projectsArray.map(repo =>{
                                return (
                                    <Card link = {repo.link} title = {repo.title} image = {repo.image} description = {repo.description}></Card>
                                )
                            })}
                        </ListVanilla>
                    </Col>
                    <Col size = "sm">
                        <List className="list list-buffer">
                            {this.state.repos.map(repo => {
                                return (
                                    <ListElement buttonLink={repo.repoLink}>{repo.repoTitle}</ListElement>
                                )
                            }
                            )}
                        </List>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Projects