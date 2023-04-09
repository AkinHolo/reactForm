
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <header>
          <h1>Become Real Madrid Global Fan</h1>
      </header>
      <h5>To register, fill in the form and submit</h5>
      <Form>
        <Form.Group className="form-group">
          <Form.Control type="email" size="sm" placeholder="email address" />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Control type="password" size="sm" placeholder="password" />
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">Submit</Button>

      </Form>
    
    </div>
  )
}

export default App;