import React, {Component} from 'react'
import { Grid, Header, Segment, Card, Button, GridRow, GridColumn } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import {auth, providers} from './../config'
import Navbar from './Navbar'

class Launch extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: {},
            isLogged: false
        } 
    }

    componentDidMount(){
        auth.onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    user: user,
                    isLogged: true
                })
            }
            else{
                console.log('User dont logged')
                this.setState({
                    isLogged: false
                })
            }
        })
    }

    authenticate(provider){
        console.log("Logging in with "+provider)
        auth.signInWithPopup(providers[provider])
    }

    render(){
        if(this.state.isLogged){
            return <Redirect to="/categorys"/>
        }
        return (
            <>
            <Navbar/>
            <Grid container columns='2' verticalAlign='middle' textAlign='center' className='h-75'>
                <GridRow>
                    <GridColumn>
                        <Segment piled>
                            Quiz
                        </Segment>
                        <Header as='h2'>
                            A game of questions and answers.
                        </Header>
                        <p>
                            Challenge your friends on this awesome game. Just share with them and let the fun go.
                        </p>
                        <br/>
                        {
                            !this.state.isLogged &&
                            <Card fluid>
                                <Card.Content>
                                    Join now
                                </Card.Content>
                                <Card.Content>
                                    <Button color='facebook' onClick={()=> this.authenticate('facebook')}>Login with Facebook</Button>
                                    <Button color='twitter' onClick={()=> this.authenticate('twitter')}>Login with Twitter</Button>
                                </Card.Content>
                            </Card>
                        }
                        {
                            this.state.isLogged &&
                            <>
                                <h3>{this.state.user.displayName}</h3>
                                <img src={this.state.user.photoURL} alt={this.user.displayName + '_picture'}/>
                            </>
                        }
                    </GridColumn>
                </GridRow>
            </Grid>
            </>
        )
    }
}

export default Launch