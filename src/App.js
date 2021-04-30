import React from 'react';
import logo from './logo.svg';
import './App.css';

// Material UI
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import TrashIcon from '@material-ui/icons/Delete';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import SwapVerticalIcon from '@material-ui/icons/SwapVert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, red } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #f44336, #00e676)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    margin: '10px',
    padding: '5px 30px'
  }
})

const myCustomTheme = createMuiTheme({
  typography: {
      h2: {
        fontSize: 36
      }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: red[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={
        <Checkbox 
          checked={checked}
          color="primary"
          icon={<SwapVerticalIcon />}
          checkedIcon={<SwapVerticalCircleIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label="Testing Checkbox"
    />
  )
}

// Bootstrap UI
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Material UI */}
        <ThemeProvider theme={myCustomTheme}>
          <Container maxWidth="xs">
            <AppBar color="primary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Theme
                </Typography>
                <ButtonStyled />
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to Material Ui
            </Typography>
            <Typography variant="subtitle1">
              I'm learning how to use Material Ui
            </Typography>
            <ButtonStyled />
            
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={3} sm={4}>
                <Paper style={{ height:75, width:'100%' }} />
              </Grid>
              <Grid item xs={3} sm={4}>
                <Paper style={{ height:75, width:'100%' }} />
              </Grid>
              <Grid item xs={3} sm={4}>
                <Paper style={{ height:75, width:'100%' }} />
              </Grid>
            </Grid>
            
            <FormGroup>
              <TextField 
                label="Your Email"
                variant="filled" 
                color="primary" 
                type="email"
                placeholder="email@example.com"
              />
              <Grid container justify="center">
                <Grid item>
                  <TextField 
                    label="The Time"
                    variant="filled" 
                    color="secondary" 
                    type="time"
                  />
                </Grid>
                <Grid item>
                  <TextField 
                    label="The Date"
                    variant="filled" 
                    color="secondary" 
                    type="date" 
                  />
                </Grid>
              </Grid>
            </FormGroup>
            
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary" size="large">
            <Button 
                startIcon={<UnarchiveIcon />}
                onClick={() => alert("Items!")} 
                color="primary">
                  Items
              </Button>
              <Button 
                startIcon={<SaveIcon />}
                onClick={() => alert("Saved!")}>
                  Save
              </Button>
              <Button 
                startIcon={<TrashIcon />}
                onClick={() => alert("Discarded!")} 
                color="secondary">
                  Discard
              </Button>
            </ButtonGroup>
          </Container>
        </ThemeProvider>
        

        {/* Bootstrap */}
        {/* <Container>
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
        </Breadcrumb> */}
        
      </header>
    </div>
  );
}

export default App;
