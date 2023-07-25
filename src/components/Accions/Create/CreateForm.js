import React, { useState } from 'react';
import { useCreateCategoryMutation } from '../../../features/categoriesAPI';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const CreateCategoryForm = ({ handleCloseModal }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [createCategory, { isLoading }] = useCreateCategoryMutation();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const categoryData = {
        CategoryName: name,
        Description: description,
      };
  
      createCategory(categoryData)
        .unwrap()
        .then((response) => {
          console.log('Categoría creada con éxito:', response);
          handleCloseModal();
          window.location.reload();
         
        })
        .catch((error) => {
          console.error('Error al crear la categoría:', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box pb={2}>
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        </Box>
        <Box pb={2}>
        <TextField
          label="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
        />
        </Box>
        
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
          Aceptar
        </Button>
      </form>
    );
  };
  
  export default CreateCategoryForm;
  