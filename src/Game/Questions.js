import React, { Component } from 'react'
import { Grid, Radio, Button, Message, Icon } from 'semantic-ui-react'
import axios from 'axios'

import Navbar from './Navbar'

class Questions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catQuestions: {},
            isLoading: false
        }

    }

    componentDidMount() {
        this.loadingQuestions(this.props.match.params.nameCat)
    }

    loadingQuestions(nameCat) {
        this.setState({
            catQuestions: {},
            isLoading: true
        })
        const url = `https://quiz-game-udemy.firebaseio.com/categorys.json?orderBy="name"&equalTo="${nameCat}"`
        axios.get(url)
            .then(data => {
                const key = Object.keys(data.data)[0]
                console.log('Data list: ', data.data[key])
                this.setState({
                    catQuestions: data.data[key],
                    isLoading: false
                })
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }

    renderQuestions(question, key) {
        return (
            <Grid container columns={2} textAlign='center' key={key}>
                <Grid.Row>
                    <h3>Question: {question.title}.</h3>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Message color='yellow'>
                            <p>1- {question.alternatives[1].answer}</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Message color='teal'>
                            <p>2- {question.alternatives[2].answer}</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Message color='pink'>
                            <p>3- {question.alternatives[3].answer}</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Message color='brown'>
                            <p>4- {question.alternatives[4].answer}</p>
                            <Radio toggle />
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {
        return (
            <div>
                <Navbar />
                <Grid textAlign='center' style={{margin: "10px"}}>
                    <Grid.Row>
                        <Grid.Column>
                        <h1>Questions about {this.props.match.params.nameCat} <Icon name={this.state.catQuestions.icon} /></h1>
                        <hr/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {
                    this.state.catQuestions.questions &&
                    Object.keys(this.state.catQuestions.questions)
                        .map(key => {
                            return this.renderQuestions(this.state.catQuestions.questions[key], key)
                        })
                }
                <Button>Response</Button>
            </div>
        )
    }
}

export default Questions