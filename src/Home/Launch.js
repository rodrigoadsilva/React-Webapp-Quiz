import React, {Component} from 'react'
import { Grid, Header, Segment, Card, Button, GridRow, GridColumn } from 'semantic-ui-react'

import config, {auth, providers} from './../config'
import Navbar from './Navbar'

class Launch extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: {},
            isLogged: false
        }

        auth.onAuthStateChanged((user) => {
            if(user){
                console.log(user)
            }
            else{
                console.log('Can`t login')
            }
        })
    }

    authenticate(provider){
        console.log(provider)
        auth.signInWithPopup(providers[provider])
    }

    render(){
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
                        <Card fluid>
                            <Card.Content>
                                Join now
                            </Card.Content>
                            <Card.Content>
                                <Button color='facebook' onClick={()=> this.authenticate('facebook')}>Login with Facebook</Button>
                                <Button color='twitter'>Login with Twitter</Button>
                            </Card.Content>
                        </Card>
                    </GridColumn>
                </GridRow>
            </Grid>
            </>
        )
    }
}

export default Launch