import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'
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
} from 'semantic-ui-react'

import Footer from '../components/Footer'
import CustomMenu from '../components/CustomMenu'

const propTypes = {
  children: PropTypes.func.isRequired,
}

class TemplateWrapper extends Component {
  render() {
    return (
      <Segment
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          padding: '0em',
          borderRadius: 0,
          border: 0
        }}
      >
        <Helmet
          title="Editorial Deriva"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <CustomMenu />
        <Segment style={{ padding: '0em', top: 42.844 }} vertical>
          { this.props.children() }
        </Segment>
        <Footer />
      </Segment>
    )
  }
}

export default TemplateWrapper
