import React from 'react'

import { Grid, Segment, Header, Icon } from 'semantic-ui-react'

const size = {
    width: 175,
    height: 100,
    display: "flex",
    justifyContent: "center"
}

const Category = props => {
    return (
        <Grid.Column>
            <Segment circular style={size}>
                <Header as='h2'>
                    <Icon name={props.icon} />
                    <Header.Subheader>
                        {props.title}
                    </Header.Subheader>
                </Header>
            </Segment>
        </Grid.Column>
    )
}

export default Category