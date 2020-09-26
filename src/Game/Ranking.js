import React, { Component } from 'react'
import { Grid, List } from 'semantic-ui-react'

class Ranking extends Component {
    render() {
        return (
            <Grid padded>
                <Grid.Row color={'orange'}>
                    <Grid.Column textAlign='center'>
                        <h2>Ranking of the Player</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <List divided>
                            <List.Item>
                                <p>Blabla</p>
                            </List.Item>
                            <List.Item>
                                <p>Bleble</p>
                            </List.Item>
                            <List.Item>
                                <p>Bloblo</p>
                            </List.Item>
                            <List.Item>
                                <p>Blibli</p>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Ranking