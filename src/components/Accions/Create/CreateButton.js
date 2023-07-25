import React, { useState } from 'react';
import CreateCategoryForm from './CreateForm';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const CreateButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Crear Categoría
        </Button>
  
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            px: 4,
            pb: 4,
            pt: 1,
            borderRadius: '1%'
          }}>
            <h2 id="modal-title">Crear Categoría</h2>
            <CreateCategoryForm handleCloseModal={handleCloseModal} />
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default CreateButton;