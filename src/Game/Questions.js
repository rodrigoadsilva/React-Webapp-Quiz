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

        this.loadingQuestions(this.props.match.params.idCat)

    }

    loadingQuestions(idCat){

    }

    render(){
        return(
            <div>
                <Navbar/>
                <Grid columns={2} textAlign='center'>
                    <Grid.Row>
                        <h1>Questions about {JSON.stringify(this.props.match.params)}</h1>
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