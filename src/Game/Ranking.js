import React, { Component } from 'react'
import { Grid, List} from 'semantic-ui-react'

import Navbar from './Navbar'
import Player from './Player'

class Ranking extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Grid padded>
                <Grid.Row color={'orange'}>
                    <Grid.Column textAlign='center'>
                        <h2>Ranking of the Player</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <List divided>
                            <Player playerImage='' playerName='FooBla' playerPoints='400'/>
                            <Player playerImage='' playerName='BleBla' playerPoints='250'/>
                            <Player playerImage='' playerName='TooBla' playerPoints='10'/>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
        )
    }
}

export default Ranking