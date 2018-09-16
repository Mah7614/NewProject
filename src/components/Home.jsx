import React, { Component } from 'react';
import tempParagraph from './paragraph.png';
import {
    Container,
    Header,
    Image,
  } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <div>
    <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>
              A text container is used for the main container, which is useful for single column layouts.
      </p>

            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
            <Image src={tempParagraph} style={{ marginTop: '2em' }} />
          </Container>
  </div>
        );
    }
}
export default Home