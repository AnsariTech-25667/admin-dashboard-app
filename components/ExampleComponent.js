// ExampleComponent.js
import React, { useState } from 'react';
import CustomModal from '../components/Modal/Modal';

const ExampleComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleConfirm = () => {
    // Handle confirm action
    console.log('Confirmed!');
    toggleModal();
  };

  return (
    <div>
      <Button auto onClick={toggleModal}>
        Open Modal
      </Button>
      <CustomModal
        isOpen={modalOpen}
        toggle={toggleModal}
        title="Example Modal"
        onConfirm={handleConfirm}
      >
        <p>This is the modal content.</p>
      </CustomModal>
    </div>
  );
};

export default ExampleComponent;
