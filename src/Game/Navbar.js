import React from 'react'
import { Link } from 'react-router-dom'
import {Menu, Image } from 'semantic-ui-react'

const Navbar = props => {
    return (
        <Menu color={'orange'} inverted>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/categorys'>Categorys</Menu.Item>
            <Menu.Item as={Link} to='/questions'>Question</Menu.Item>
            <Menu.Item as={Link} to='/result'>Results</Menu.Item>
            <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item><Image avatar src='' />User Name</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar