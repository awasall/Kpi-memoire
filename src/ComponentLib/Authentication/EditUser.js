import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import config from '../../constants/config';
import { tokenConfig } from '../../App/utilitity';

//import AppNavbar from './AppNavbar';

const EditUser = () => {
  const initialFormState = {
    name: '',
    username: '' 
  };
  const [group, setGroup] = useState(initialFormState);
  const navigate = useHistory();
  const { id } = useParams();

  useEffect(() => {
    
      fetch(`${config.apiBaseUrl}/api/auth/detailuser/${id}`,tokenConfig())
        .then(response => response.json())
        .then(data => setGroup(data));
    
  }, [id, setGroup]);

  const handleChange = (event) => {
    const { name, value } = event.target

    setGroup({...group, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const method = (group.id) ? 'PUT' : 'POST';
    const token = localStorage.getItem("token");

    const requestOptions = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
        mode: 'no-cors'
      },
      body: JSON.stringify(group)
    }

    await fetch(`${config.apiBaseUrl}/api/auth/modifuser/${group.id}`, requestOptions);
   // setGroup(initialFormState);
    navigate.push('/listeUser');
  }

  const title = <h2>Modifier l'utilisateur</h2>;

  return (<div>
     
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={group.name || ''}
                   onChange={handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Username</Label>
            <Input type="text" name="username" id="username" value={group.username || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/listUser">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};

export default EditUser;