import React, {Component} from 'react'
import {List, Container} from 'semantic-ui-react'

import Navbar from './Navbar'
import ResultQuestion from './ResultQuestion'

class Result extends Component {
    render(){
        const {playerResult} = this.props.location.state
        return(
            <div>
                <Navbar/>
                    <h2>Final result</h2>
                    <p>Following is your final result of the questions answered in the chosen category</p>
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
            </div>
        )
    }
}

export default Result