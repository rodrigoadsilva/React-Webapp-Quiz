import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Navbar from './Navbar'
import Category from './Category'

const columnCenterContent = {
    display: "flex",
    justifyContent: "center"
}

class Categorys extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Grid container>
                    <Grid.Row textAlign="center">
                        <Grid.Column>
                            <h1>Caterorys List</h1>
                            <p>Select the category that you want responses the awnsers</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column color={'yellow'} style={columnCenterContent}>
                            <Category title='Sports' icon='futbol' />
                        </Grid.Column>
                        <Grid.Column color={'blue'} style={columnCenterContent}>
                            <Category title='Music' icon='music' />
                        </Grid.Column>
                        <Grid.Column color={'red'} style={columnCenterContent}>
                            <Category title='World' icon='globe' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column style={columnCenterContent}>
                            <Category title='Animals' icon='paw' />
                        </Grid.Column>
                        <Grid.Column style={columnCenterContent}>
                            <Category title='Geek' icon='hand spock outline' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}

export default Categorys
