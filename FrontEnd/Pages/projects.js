
import React from 'react'
import { Link } from 'gatsby'
import { Card, Header, Container, Image } from 'semantic-ui-react'
import Layout from '../components/layout'
import mbdb from '../images/mbdb.io.png'
import mbdbcms from '../images/mbdbcms.png'
import thekitchen from '../images/thekitchen.png'
import github from '../images/icons/social_media'
import ProjectCard from '../components/ProjectCard'

const iconStyle = {
  height: 50,
  width: 'auto',
  margin: 10,
}

const flexy = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}

const Projects = ({ location }) => (
  <Layout location={location} color={'#f0f8ff'} style={flexy}>
    <Container style={{ display: 'flex', justifyContent: 'space-around' }}>
      <ProjectCard
        header="Manhattan Bathroom Database"
        subheader="An index of crowd sourced bathroom data"
        src={mbdb}
        href="https://mbdb.io"
        git="https://github.com/clementsjj/mbdb-back-stable"
        description="This project is developed with a React frontend, and Node backend, with MongoDB serving as a database (MERN stack). It attempts to gather crowd sourced data into a catalog of public and private bathrooms throughout Manhattan in a minimalist fashion that is easy for the consumer to use. 
        Future improvements include a dedicated mobile platform built on React Native and mapping data generated on different platforms involving OpenStreetMaps (leaflet, mapbox)"
      />

      <ProjectCard
        header="MBDB CMS"
        subheader="A CMS with encrypted login and jwt"
        src={mbdbcms}
        href="https://mbdb-cms.netlify.com"
        git="https://github.com/clementsjj/mbdb-cms"
        description="MBDB CMS is a content management system for managing and validating
      data points for the Manhattan Bathroom Database Project."
        extra="This is built in React and uses jwt to authenticate for administrative
      roles. You can also browse the database and add data points without
      having a username, but you are unable to update and validate points."
      />

      <ProjectCard
        header="MBDB CMS"
        subheader="A Minimalist Recipe Finder"
        src={thekitchen}
        href="https://thekitchen.netlify.com"
        git="https://github.com/clementsjj/Kitchen-Final"
        description="This minimalist web app will find a recipe based on ingredients that
      you enter."
        extra="This is built in React using Redux."
      />
    </Container>
  </Layout>
)

export default Projects
