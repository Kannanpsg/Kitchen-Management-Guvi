
import React from 'react'
//import { Link } from 'gatsby'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout'
import Homebody from '../components/Homebody/Homebody'
import HomebodyThree from '../components/Homebody/HomebodyThree'
import HomebodyTwo from '../components/Homebody/HomebodyTwo'
import { Divider } from 'semantic-ui-react'
import stylings from '../templates/general.module.css'

const IndexPage = ({ location }) => (
  <Layout location={location} color={'#f0f8ff'}>
    <Hero />
    <br />
    <Homebody />
    <br />
    <Divider
      style={{ backgroundColor: '#00008b', width: '90%', margin: '5% auto' }}
      // className={stylings.gradient}
      section
    />
    <br />
    <HomebodyTwo />
    <br />
    <Divider
      style={{ backgroundColor: '#00008b', width: '90%', margin: '5% auto' }}
      // className={stylings.gradient}
      section
    />
    <HomebodyThree />
  </Layout>
)

export default IndexPage
