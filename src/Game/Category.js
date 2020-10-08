import React from 'react'
import { Link } from 'react-router-dom'

import { Grid, Segment, Header, Icon } from 'semantic-ui-react'

const size = {
    width: 175,
    height: 100,
    display: "flex",
    justifyContent: "center"
}

const Category = props => {
    return (
        <Grid.Column style={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
            <Link to={`/questions/${props.title}`}>
                <Segment circular style={size}>
                    <Header as='h2'>
                        <Icon name={props.icon} />
                        <Header.Subheader>
                            {props.title}
                        </Header.Subheader>
                    </Header>
                </Segment>
            </Link>
        </Grid.Column>
    )
}

export default Category