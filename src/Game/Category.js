import React from 'react'

import { Grid, Segment, Header, Icon } from 'semantic-ui-react'

const size = {
    width: 175,
    height: 100
}

const Category = props => {
    return (
        <Grid.Column>
            <Segment circular style={size}>
                <Header as='h2'>
                    <Header.Subheader>
                        <Icon name={props.icon} />
                    </Header.Subheader>
                    {props.title}
                </Header>
            </Segment>
        </Grid.Column>
    )
}

export default Category