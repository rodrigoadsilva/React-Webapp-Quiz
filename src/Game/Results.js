import React, {Component} from 'react'
import {List, Container, Grid} from 'semantic-ui-react'

import Navbar from './Navbar'
import ResultQuestion from './ResultQuestion'

class Result extends Component {
    render(){
        const {playerResult, playerPoints} = this.props.location.state
        return(
            <div>
                <Navbar/>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Grid.Column>
                            <h2>Final result</h2>
                            <p>Following is your final result of the questions answered in the chosen category</p>
                            <h3>Your points: {playerPoints}</h3>
                            <p>See your result for each answer</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Container>
                    <List divided>
                        {   
                            Object.keys(playerResult)
                                .map(key =>{
                                    console.log()
                                    const color = (playerResult[key].isRight ? 'green' : 'red')
                                    return <ResultQuestion
                                                idQuestion={parseInt(key)+1}
                                                question={playerResult[key].question}
                                                answer={playerResult[key].answer}
                                                colorResult={color}
                                                key={key}
                                            />
                                })
                        }
                    </List>
                </Container>
                <hr/>
            </div>
        )
    }
}

export default Result