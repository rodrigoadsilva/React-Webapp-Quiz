import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const Navbar = props => {
    return (
        <Menu>
            <Menu.Menu position='right'>
                <Dropdown item text='Login'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Facebook</Dropdown.Item>
                        <Dropdown.Item>Twitter</Dropdown.Item>
                        <Dropdown.Item>Admin</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar