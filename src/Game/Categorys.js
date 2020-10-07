import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import config from '../config'
import Navbar from './Navbar'
import Category from './Category'

class Categorys extends Component {
    constructor(props){
        super(props)

        this.state = {
            categorys: {}
        }

        

    }

    componentDidMount() {
        config.syncState('categorys', {
            context: this,
            state: 'categorys',
            asArray: false
        })
    }
    

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
                        {
                            Object.keys(this.state.categorys)
                                .map(key => {
                                    return (
                                        <Category key={key} title={this.state.categorys[key].name} icon={this.state.categorys[key].icon} />
                                    )
                                })
                        }
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}

export default Categorys
