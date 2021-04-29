import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email address (for real)
                  </Form.Text>
                </Form.Group>              
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>

            
            <Button variant="secondary" type="submit">Log In</Button>
          </Form>
          <Card className="mb-3" style={{ color: "#800" }}>
            <Card.Img src="https://picsum.photos/200/100"/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                This is an example of React bootstrap cards
              </Card.Text>
              <Button variant="primary">Test Button</Button>
            </Card.Body>
          </Card>
        </Container>
        
        <Button>Bootstrap Button</Button>
        <Alert>Bootstrap alert!</Alert>
        <Alert variant="secondary">Bootstrap alert!</Alert>
        <Alert variant="success">Bootstrap alert!</Alert>
        <Breadcrumb>
          <Breadcrumb.Item>Item 1</Breadcrumb.Item>
          <Breadcrumb.Item active>Item 2</Breadcrumb.Item>
          <Breadcrumb.Item>Item 3</Breadcrumb.Item>
        </Breadcrumb>
        



        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
