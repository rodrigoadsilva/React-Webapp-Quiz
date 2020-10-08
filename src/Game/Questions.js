import React, { Component } from 'react'
import {Grid, Radio, Button, Message} from 'semantic-ui-react'
import axios from 'axios'

import Navbar from './Navbar'

class Questions extends Component {
    constructor(props){
        super(props)

        this.state = {
            questions: {},
            isLoading: false
        }

    }

    componentDidMount(){
        this.loadingQuestions(this.props.match.params.nameCat)
    }

    loadingQuestions(nameCat){
        this.setState({
            questions: {},
            isLoading: true
        })
        const url = `https://quiz-game-udemy.firebaseio.com/categorys.json?orderBy="name"&equalTo="${nameCat}"`
        axios.get(url)
            .then(data => {
                const key = Object.keys(data.data)[0]
                console.log('Data list: ', data.data[key])
                this.setState({
                    questions: data.data[key],
                    isLoading: false
                })
            })
            .catch(err => {
                console.log('Error: ' + err)
            })        
    }

    render(){
        return(
            <div>
                <Navbar/>
                <Grid columns={2} textAlign='center'>
                    <Grid.Row>
                        <h1>Questions about {this.props.match.params.nameCat}</h1>
                    </Grid.Row>
                    <Grid.Row>
                        <h3>Question 1: Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h3>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>Alternative 1</p>
                                <Radio toggle/>
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>Alternative 2</p>
                                <Radio toggle/>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color='pink'>
                                <p>Alternative 3</p>
                                <Radio toggle/>
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='brown'>
                                <p>Alternative 4</p>
                                <Radio toggle/>
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                    <Button>Response</Button>
                </Grid>
            </div>
        )
    }
}

export default Questions