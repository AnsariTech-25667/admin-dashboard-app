// components/Footer/Footer.js
import React from 'react';
import { Container, Row, Col, Text, Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row justify="center" align="center">
          <Col>
            <Text h4>MyApp</Text>
            <Text>© 2024 MyApp. All rights reserved.</Text>
          </Col>
          <Col>
            <Text h5>Contact</Text>
            <Text>Email: contact@myapp.com</Text>
            <Text>Phone: +123 456 7890</Text>
          </Col>
          <Col>
            <Text h5>Follow Us</Text>
            <Link href="https://www.facebook.com" target="_blank">
              Facebook
            </Link>
            <br />
            <Link href="https://www.twitter.com" target="_blank">
              Twitter
            </Link>
            <br />
            <Link href="https://www.instagram.com" target="_blank">
              Instagram
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

