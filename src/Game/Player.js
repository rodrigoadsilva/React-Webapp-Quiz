import React from 'react'
import { List, Image } from 'semantic-ui-react'

const Player = ({playerImage, playerName, playerPoints}) => {
    return (
        <List.Item>
            <List.Content floated='left'>
                <Image avatar src={playerImage} />
                {playerName}
            </List.Content>
            <List.Content floated='right'>
                {playerPoints}pts
            </List.Content>
        </List.Item>
    )
}

export default Player