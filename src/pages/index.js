import React, { Component } from 'react'
import Link from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import  {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Content,
} from 'semantic-ui-react'



const IndexPage = () => (
  <div>
  <Grid columns={3} relaxed>
    <Grid.Column>
      <Segment basic>
      </Segment>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <Segment basic>
        <Image centered size='small' src="http://editorialderiva.org/assets/img/logo.png" />
      </Segment>
    </Grid.Column>
    <Divider vertical></Divider>
    <Grid.Column>
      <Segment basic>
      </Segment>
    </Grid.Column>
  </Grid>
 </div>
)

export default IndexPage

