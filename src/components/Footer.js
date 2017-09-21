import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon,
} from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header
                inverted
                as='h4' content='Editorial Deriva'
              />
              <List
                link
                inverted
              >
                <List.Item as='a' href="/">
                Inicio
                </List.Item>
                <List.Item as='a' href="/somos">
                Somos
                </List.Item>
                <List.Item as='a' href="/noticias">
                Noticias
                </List.Item>
                <List.Item as='a' href="/contacto">
                Contacto
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                inverted
                as='h4'
                content='Nuestros libros'
              />
              <List
                link
                inverted
              >
                <List.Item as='a' href="/catalogo">
                Catálogo
                </List.Item>
                <List.Item as='a' href="/colecciones">
                Colecciones
                </List.Item>
                <List.Item as='a' href="/preguntas">
                Preguntas frecuentes
                </List.Item>
                <List.Item as='a' href="/despacho">
                Información de despacho
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7} textAlign='center'>
              <Header as='h4' inverted></Header>
              <Icon circular inverted color='red' name='quote left' size='large' /><h4>Las ideas humanas son una construcción histórica y social imposibles de apropiar, ¡Ante la propiedad intelectual, promovemos intelecto contra la propiedad!</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    )
  }
}

export default Footer