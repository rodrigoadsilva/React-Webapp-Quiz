import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'

import Category from './Category'

class Categorys extends Component {
    render(){
        return(
            <>
                <Grid container verticalAlign='middle' textAlign='center' columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <h1>Caterorys List</h1>
                            <p>Select the category that you want responses the awnsers</p>
                        </Grid.Column>
                        <Grid>
                            <Grid.Row columns={3}>
                                <Category title='Sports' icon='futbol'/>
                                <Category title='Music' icon='music'/>
                                <Category title='World' icon='globe'/>
                                <Category title='Animals' icon='paw'/>
                                <Category title='Boardgames' icon='chess'/>
                                <Category title='Geek' icon='hand spock outline'/>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}

export default Categorys
