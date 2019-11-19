import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteTodo = ({ deleteTodo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  let handleOpen = () => setModalOpen(true);

  let handleClose = () => setModalOpen(false);

  return (
    <Modal
      trigger={<Button onClick={handleOpen}>Delete Todo</Button>}
      open={modalOpen}
      onClose={handleClose}
      basic
      size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>Are you sure want to delete this todo</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleClose} basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button
          onClick={() => {
            deleteTodo();
            handleClose();
          }}
          color='green'
          inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteTodo;
