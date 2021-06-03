import React from 'react';
import {
  Button, Col, Container, Row, Image,
} from 'react-bootstrap';

const HowItWorksScreen = () => (
  <Container className="py-3" fluid>
    <Container>
      <Row>
        <h1 className="py-3">How SaveABuizWorks</h1>
        <p>
          SaveABuiz is the best place to fundraise, whether you are an individual,
          group, or organization.
        </p>
      </Row>
      <Row>
        <Image
          src="/images/howItWorks.png"
          alt="Image illustration on how
            SaveABuiz works"
          className="pt-3"
        />
      </Row>
    </Container>
    <Container className="py-5 my-5" style={{ backgroundColor: '#fbf8f6' }} fluid>
      <Container>
        <Row>
          <Col xs={12} sm={4} className="py-3">
            <p><span className="green-circle">1</span></p>
            <h5>Start you fundraiser</h5>
            <ul>
              <li>Set fundraiser goal</li>
              <li>Tell your story</li>
              <li>Add a picture or video</li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="py-3">
            <p><span className="green-circle">2</span></p>
            <h5>Share with friends</h5>
            <ul>
              <li>Send emails</li>
              <li>Send text messages</li>
              <li>Share on social media</li>
            </ul>
          </Col>
          <Col xs={12} sm={4} className="py-3">
            <p><span className="green-circle">3</span></p>
            <h5>Manage donations</h5>
            <ul>
              <li>Accept donations</li>
              <li>Thank donors</li>
              <li>Withdraw funds</li>
            </ul>
          </Col>
          <Col>
            <Button variant="outline-primary">
              Start a
              {' '}
              <span style={{ textTransform: 'none' }}>
                SaveABuiz
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  </Container>
);

export default HowItWorksScreen;