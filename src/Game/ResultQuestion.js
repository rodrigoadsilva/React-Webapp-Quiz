import React from 'react'
import {List, Label} from 'semantic-ui-react'

const ResultQuestion = props => {
    const {id, title, response} = props.answer
    return(
        <List.Item>
            <Label>{id}</Label>
            {title}
            <List.Content floated='right'>{response}</List.Content>
        </List.Item>
    )
}

export default ResultQuestion