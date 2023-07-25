import React, { useState } from 'react';
import { useDeleteCategoryMutation } from '../../features/categoriesAPI';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteButton({ categoryId, name }) {

  const [open, setOpen] = useState(false);
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

  const handleDelete = () => {
    setOpen(false);
    deleteCategory(categoryId)
      .unwrap()
      .then((response) => {
        console.log('Categoría eliminada con éxito:', response);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error al eliminar la categoría:', error);
      });
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} disabled={isLoading} variant="contained" size="small" color="error">
        Eliminar
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar la categoría "{name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" disabled={isLoading}>
            Cancelar
          </Button>
          <Button onClick={handleDelete} disabled={isLoading} variant="contained" size="small" color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteButton;
