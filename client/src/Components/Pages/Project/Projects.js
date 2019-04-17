import React from 'react'
import API from '../../Utils/API';
import List from '../../components/List/list'
import ListElement from '../../components/List/ListElement'
import { Col, Row, Container } from "../../components/Grid";
import "./Project.css"



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
    }


    render() {


        return (
            <Container fluid>
                <Row>
                    <Col size = "md"></Col>
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