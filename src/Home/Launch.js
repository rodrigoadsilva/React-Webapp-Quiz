import React from 'react'
import { Grid, Header, Segment, Card, Button, GridRow, GridColumn } from 'semantic-ui-react'

import Navbar from './Navbar'

const Launch = props => {
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
                            <Button color='facebook'>Login with Facebook</Button>
                            <Button color='twitter'>Login with Twitter</Button>
                        </Card.Content>
                    </Card>
                </GridColumn>
            </GridRow>
        </Grid>
        </>
    )
}

export default Launch