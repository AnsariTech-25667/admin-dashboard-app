
// components/Modal/Modal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';

const CustomModal = ({ isOpen, toggle, title, children, onConfirm }) => {
  return (
    <Modal open={isOpen} onClose={toggle}>
      <ModalHeader>
        <h4>{title}</h4>
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button auto flat color="error" onClick={toggle}>
          Cancel
        </Button>
        <Button auto onClick={onConfirm}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
