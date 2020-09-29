import React from 'react'
import {Grid, Radio, Button, Message} from 'semantic-ui-react'

import Navbar from './Navbar'

const Questions = props => {
    return(
        <div>
            <Navbar/>
            <Grid columns={2} textAlign='center'>
                <Grid.Row>
                    <h1>Questions about {props.categoryQuestion}</h1>
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

export default Questions