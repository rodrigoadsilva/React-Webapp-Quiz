import React, { Component } from 'react'
import { Grid, Radio, Button, Message, Icon, Progress } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

import Navbar from './Navbar'

class Questions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catQuestions: {},
            isLoading: false,
            currentQuestion: 0,
            totalQuestions: 0,
            answers: {}
        }

        this.nextQuestion = this.nextQuestion.bind(this)
        this.onRadioChange = this.onRadioChange.bind(this)
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
                console.log('Size: ', _.size(data.data[key].questions))
                this.setState({
                    catQuestions: data.data[key],
                    isLoading: false,
                    totalQuestions: _.size(data.data[key].questions)
                })
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }

    nextQuestion(){
        const {currentQuestion, totalQuestions} = this.state
        if(currentQuestion < totalQuestions-1){
            this.setState({
                currentQuestion: this.state.currentQuestion+1
            })
        }
        else{
            console.log('No more questions')
        }
    }

    onRadioChange = (e, {answer, name, alternative}) => {
        this.setState({answers: answer})
        console.log('Yor answer is', answer)
        console.log(this.state.catQuestions.questions[name].alternatives[alternative].correct)
    }

    renderQuestions(question, id) {
        return (
            <Grid container columns={2} textAlign='center' key={id}>
                <Grid.Row>
                    <h3>Question: {question.title}.</h3>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column style={{paddingBottom: "5px"}}>
                        <Message color='yellow'>
                            <p>1- {question.alternatives[1].answer}</p>
                            <Radio
                                toggle
                                name={id}
                                alternative={1}
                                answer={question.alternatives[1].answer}
                                onChange={this.onRadioChange}
                            />
                        </Message>
                    </Grid.Column>
                    <Grid.Column style={{paddingBottom: "5px"}}>
                        <Message color='teal'>
                            <p>2- {question.alternatives[2].answer}</p>
                            <Radio
                                toggle
                                name={id}
                            />
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='pink'>
                            <p>3- {question.alternatives[3].answer}</p>
                            <Radio
                                toggle
                                name={id}
                            />
                        </Message>
                    </Grid.Column>
                    <Grid.Column>
                        <Message color='brown'>
                            <p>4- {question.alternatives[4].answer}</p>
                            <Radio
                                toggle
                                name={id}
                            />
                        </Message>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {

        let items = []

        if(this.state.isLoading){
            return <h2>Loading questions...</h2>
        }
        
        return (   
            <>
                <Navbar />
                <Grid textAlign='center' style={{margin: "10px"}}>
                    <Grid.Row>
                        <Grid.Column>
                        <h1>Questions about {this.state.catQuestions.name} <Icon name={this.state.catQuestions.icon} /></h1>
                        <hr/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {
                    this.state.catQuestions.questions &&
                    Object.keys(this.state.catQuestions.questions)
                        // eslint-disable-next-line
                        .map(key => {
                            items.push(key)
                        })
                }
                {
                    this.state.catQuestions.questions &&
                    this.renderQuestions(this.state.catQuestions.questions[items[this.state.currentQuestion]], items[this.state.currentQuestion])
                }
                <Progress value={this.state.currentQuestion + 1} total={items.length} progress='ratio' color={'orange'}/>
                <Grid textAlign='center' style={{margin: "20px"}}>
                    <Button onClick={this.nextQuestion}>Next</Button>
                </Grid>
            </>
        )
    }
}

export default Questions