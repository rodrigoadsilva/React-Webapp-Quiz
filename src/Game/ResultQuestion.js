import React from 'react'
import {List, Label} from 'semantic-ui-react'

const ResultQuestion = props => {
    const {idQuestion, question, answer, colorResult} = props
    return(
        <List.Item>
            <Label color={colorResult} horizontal>{idQuestion}</Label>
            {question}
            <List.Content floated='right'>
                <span style={{ color: 'teal' }} >Your answer was:</span> {answer}
                </List.Content>
        </List.Item>
    )
}

export default ResultQuestion