import React, {Component} from 'react'
import {List, Container} from 'semantic-ui-react'

import Navbar from './Navbar'
import ResultQuestion from './ResultQuestion'

const question = [
    {
        id: '1',
        title: 'FooBla',
        response: '3'
    },
    {
        id: '2',
        title: 'BeeBla',
        response: '1'
    },
    {
        id: '3',
        title: 'TaaBla',
        response: '3'
    },
    {
        id: '4',
        title: 'FiiBla',
        response: '4'
    }
]

class Result extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <h2>Final result</h2>
                <p>Following is your final result of the questions answered in the chosen category</p>
                <Container>
                    <List divided>
                        <ResultQuestion answer={question[0]}/>
                        <ResultQuestion answer={question[1]}/>
                        <ResultQuestion answer={question[2]}/>
                        <ResultQuestion answer={question[3]}/>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Result