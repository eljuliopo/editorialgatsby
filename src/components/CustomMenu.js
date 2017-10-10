import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Sidebar, Dropdown } from 'semantic-ui-react'
import Footer from './Footer'

const propTypes = {
  //children: PropTypes.object,
}

class CustomMenu extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visible } = this.state
    const { activeItem } = this.state

    return (
      <div>
        <Menu
          inverted
          size="mini"
          //compact
          fixed="top"
          style={{
            backgroundColor: "rgba(99,33,33)",
            zIndex: 5000
          }}>
          <Menu.Item
            header
            name='null'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            href="/"
          >DERIVA
          </Menu.Item>
          <Menu.Item
            className="mobile hidden"
            name='somos'
            active={activeItem === 'somos'}
            onClick={this.handleItemClick}
            href="/somos"
          >Somos
          </Menu.Item>
          <Menu.Item
            className="mobile hidden"
            name='noticias'
            active={activeItem === 'noticias'}
            onClick={this.handleItemClick}
            href="/noticias"
          >Noticias
          </Menu.Item>
          <Menu.Item
            className="mobile hidden"
            name='catalogo'
            active={activeItem === 'catalogo'}
            onClick={this.handleItemClick}
            href="/catalogo"
          >Catálogo
          </Menu.Item>
          <Menu.Item
            className="mobile hidden"
            name='contacto'
            active={activeItem === 'contacto'}
            onClick={this.handleItemClick}
            href="/contacto"
          >Contacto
          </Menu.Item>
          <Menu.Menu className="mobile only" position='right'>
            <Menu.Item>
              <Icon
                size="medium"
                onClick={this.toggleVisibility}
                name="sidebar"
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {
        //<Sidebar.Pushable>
        }
          <Sidebar
            as={Menu}
            animation='push'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
            style={{backgroundColor: "rgba(99,33,33,0.8)"}}
          >
            <Menu.Item
              style={{marginTop: "50px"}}
              onClick={this.toggleVisibility}
              href="/"
              name='inicio'
            >
              <Icon circular inverted color='red' name='home' size='tiny' />
              Inicio
            </Menu.Item>
            <Menu.Item
              onClick={this.toggleVisibility}
              href="/somos"
              name='somos'
            >
              <Icon circular inverted color='red' name='users' size='small' />
              Somos
            </Menu.Item>
            <Menu.Item
              onClick={this.toggleVisibility}
              href="/noticias"
              name='noticias'
            >
              <Icon circular inverted color='red' name='newspaper' />
              Noticias
            </Menu.Item>
            <Menu.Item
              onClick={this.toggleVisibility}
              href="/catalogo"
              name='catalogo'>
              <Icon circular inverted color='red' name='book' />
              Catálogo
            </Menu.Item>
            <Menu.Item
              onClick={this.toggleVisibility}
              href="/contacto"
              name='contacto'>
              <Icon circular inverted color='red' name='mail' />
              Contacto
            </Menu.Item>
          </Sidebar>
{/*
          <Sidebar.Pusher>
            {
            //  this.props.children
            }
          </Sidebar.Pusher>

        </Sidebar.Pushable>
*/}
      </div>
    )
  }
}

export default CustomMenu