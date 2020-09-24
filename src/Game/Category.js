import React, {Component} from 'react'
import {Grid, Segment, Header, Icon} from 'semantic-ui-react'

const size = {
    width: 175,
    height: 100
}

class Categorys extends Component {
    render(){
        return(
            <>
                <Grid container verticalAlign='middle' textAlign='center' columns={5} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <h2>Caterorys List</h2>
                            <p>Select the category that you want responses the awnsers</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    Sports
                                    <Header.Subheader>
                                        <Icon name='football ball'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    Music
                                    <Header.Subheader>
                                        <Icon name='music'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    World
                                    <Header.Subheader>
                                        <Icon name='globe'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    Music
                                    <Header.Subheader>
                                        <Icon name='music'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    World
                                    <Header.Subheader>
                                        <Icon name='globe'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    Sports
                                    <Header.Subheader>
                                        <Icon name='football ball'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    Music
                                    <Header.Subheader>
                                        <Icon name='music'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    World
                                    <Header.Subheader>
                                        <Icon name='globe'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    Music
                                    <Header.Subheader>
                                        <Icon name='music'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment circular style={size}>
                                <Header as='h2'>
                                    World
                                    <Header.Subheader>
                                        <Icon name='globe'/>
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        )
    }
}

export default Categorys
