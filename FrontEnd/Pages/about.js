
import React from 'react'
import { Link } from 'gatsby'
import { Container, Image, Grid, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import Aboutaccordion from '../components/Aboutbody/Aboutaccordion'
import Aboutaccordion2 from '../components/Aboutbody/Aboutaccordion2'
import Aboutaccordion3 from '../components/Aboutbody/Aboutaccordion3'
import DynamicAccordion from '../components/Aboutbody/DynamicAccordion'
import gif from '../images/gif/giftest.gif'
import gifii from '../images/gif/giftestii.gif'
import psychadeliccat from '../images/gif/psychadeliccat.gif'

const title1 = 'Favorite Cities'
const title2 = 'Some Subject'

const AboutPage = ({ location }) => (
  <Layout location={location} color={'#f0f8ff'}>
    {/* <Aboutaccordion2 />
    <Aboutaccordion3 /> */}
    <Link to="/about-this-site/">About This Page...</Link>
    <Grid stackable padded={false}>
      <Grid.Row centered columns={3} verticalAlign={'middle'}>
        <Grid.Column width={6}>
          <Container>
            <Aboutaccordion />
          </Container>
        </Grid.Column>
        <Grid.Column width={4}>
          {/* <Container> */}
          <Image
            src={psychadeliccat}
            style={{ width: 250, margin: '0 auto' }}
          />
          {/* </Container> */}
        </Grid.Column>
        <Grid.Column width={6}>
          <Container>
            <DynamicAccordion title="Favorite Cities">
              <ol>
                <li>New York City</li>
                <li>Seoul</li>
              </ol>
            </DynamicAccordion>
            <DynamicAccordion title="Favorite Coding Schools">
              <ol>
                <li>Code Immersives</li>
              </ol>
            </DynamicAccordion>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider
      style={{
        backgroundColor: '#00008b',
        width: '90%',
        margin: '5% auto',
        height: 10,
      }}
      section
    />

    <Grid stackable padded={false}>
      <Grid.Row centered columns={3} verticalAlign={'middle'}>
        <Grid.Column width={6}>
          {/* <Container> */}
          <Image
            src={psychadeliccat}
            style={{ width: 250, margin: '0 auto' }}
          />
          {/* </Container> */}
        </Grid.Column>
        <Grid.Column width={4}>
          {/* <Container> */}
          <DynamicAccordion title="Favorite Parks">
            <ol>
              <li>Washington Square Park</li>
              <li>Sara D. Roosevelt Park </li>
              <li>Hudson River Park </li>
            </ol>
          </DynamicAccordion>
          {/* </Container> */}
        </Grid.Column>
        <Grid.Column width={6}>
          <Container>
            <Image
              src={psychadeliccat}
              style={{ width: 250, margin: '0 auto' }}
            />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
)

export default AboutPage
