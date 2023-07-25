import React, { useState } from 'react';
import { useEditCategoryMutation } from '../../../features/categoriesAPI';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const EditCategoryForm = ({ handleCloseModal, categoryId, CategoryName, Description }) => {
    const [name, setName] = useState(CategoryName);
    const [description, setDescription] = useState(Description);
    const [editCategory, { isLoading }] = useEditCategoryMutation();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const categoryData = {
        CategoryName: name,
        Description: description,
        CategoryID: categoryId
      };
  
      editCategory(categoryData)
        .unwrap()
        .then((response) => {
          console.log('Categoría editada:', response);
          handleCloseModal();
          window.location.reload();
         
        })
        .catch((error) => {
          console.error('Error al editar la categoría:', error);
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
  
  export default EditCategoryForm;