import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import config from '../../constants/config';
import { tokenConfig } from '../../App/utilitity';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ListeUser = () => {
  function SimpleDialog(props) {
    const { onClose, open, id } = props;
  
    const handleClose = () => {
      onClose(false);
    };
  
    return (
      <Dialog 
        onClose={handleClose} open={open} id={id}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Confirmation suppression</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You are successful in life!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
              Disagree
            </Button>
            <Button onClick={() => remove(id)} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
      </Dialog>
    );
  }

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [id, setId] = React.useState('');

  useEffect(() => {
    setLoading(true);

    fetch(`${config.apiBaseUrl}/api/auth/listuser`,tokenConfig())
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGroups(data);
        setLoading(false);
      })
  }, []);

  const handleClickOpen = (groudId) => {
    setOpen(true);
    setId(groudId);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const remove = async (id) => {
    const method = "DELETE";
    const token = localStorage.getItem("token");
    console.log(token);
    const requestOptions = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
        mode: 'no-cors'
      }
     
    }
    
    await fetch(`${config.apiBaseUrl}/api/auth/deteuser/${id}`,requestOptions).then(() => {
      let updatedGroups = [...groups].filter(i => i.id !== id);
      setGroups(updatedGroups);
      handleClose();
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const groupList = groups.map(group => {
    const address = `${group.name || ''} ${group.username || ''} `;
    return <tr key={group.id}>
      <td style={{whiteSpace: 'nowrap'}}>{group.name}</td>
      <td>{group.username}</td>
      
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={`/editUser/${group.id}`}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => handleClickOpen(group.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      
      <Container fluid>
       
        <h3>La liste des utilisateurs</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Name</th>
            <th width="20%">Username</th>
            
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {groupList}
          </tbody>
        </Table>
      </Container>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        id={id}
      />
    </div>
  );
};

export default ListeUser;

