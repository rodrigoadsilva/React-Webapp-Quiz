import React, {Component} from 'react'
import {List, Label} from 'semantic-ui-react'

class Result extends Component {
    render(){
        return(
            <div>
                <h2>Final result</h2>
                <p>Following is your final result of the questions answered in the chosen category</p>

                <List divided>
                    <List.Item>
                        <Label>1</Label>
                        Question 1
                        <List.Content floated='right'>3</List.Content>
                    </List.Item>
                    <List.Item>
                        <Label>2</Label>
                        Question 2
                        <List.Content floated='right'>1</List.Content>
                    </List.Item>
                    <List.Item>
                        <Label>3</Label>
                        Question 3
                        <List.Content floated='right'>4</List.Content>
                    </List.Item>
                    <List.Item></List.Item>
                </List>
            </div>
        )
    }
}

export default Result