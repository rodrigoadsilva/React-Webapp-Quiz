import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import firebase from 'firebase'

import {auth} from './../config'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            isLogged: false
        }

        this.logoutUser = this.logoutUser.bind(this)

    }

    componentDidMount() {

        auth.onAuthStateChanged((user) => {
            if(user){
                const userCurrent = firebase.auth().currentUser
                console.log(userCurrent)
                
                if (userCurrent !== null) {
                    const userLogged = {
                        name: userCurrent.displayName,
                        picture: userCurrent.photoURL
                    }
                    this.setState({
                        user: userLogged,
                        isLogged: true
                    })
                }
            }
            else{
                console.log('User dont logged')
                this.setState({
                    isLogged: false
                })
            }
        })
    }

    logoutUser() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({
                    user: {},
                    isLogged: false
                })
            })
            .catch(err => {
                console.log('Error on logout user: ' + err)
            })
    }

    render() {
        if (!this.state.isLogged) {
            return (
                <Menu color={'orange'} inverted>
                    <Menu.Item><strong>Do you need must be logged to see this content</strong></Menu.Item>
                    <Menu.Item position='right' as={Link} to='/'>Login, please</Menu.Item>
                </Menu>
            )
        }

        const { name, picture } = this.state.user
        return (
            <Menu color={'orange'} inverted>
                <Menu.Item as={Link} to='/categorys'>Categorys</Menu.Item>
                <Menu.Item as={Link} to='/questions'>Question</Menu.Item>
                <Menu.Item as={Link} to='/result'>Results</Menu.Item>
                <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item><Image avatar src={picture} /></Menu.Item>
                    <Dropdown item text={name}>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.logoutUser}>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Navbar