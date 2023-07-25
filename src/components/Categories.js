import React from 'react';
import DeleteButton from './Accions/DeleteButton';
import CreateButton from './Accions/Create/CreateButton';
import EditButton from './Accions/Edit/EditButton';

import { useGetCategoriesQuery } from '../features/categoriesAPI';

import { TableHead, TableRow, Table, TableContainer, TableBody, TableCell, Box } from '@mui/material';

export default function Categories() {

  const { data: categories } = useGetCategoriesQuery()

  return (
    <>
      <h1>Categorias</h1>
      <Box mt={5} mb={10}>

        <CreateButton />
        <TableContainer>

          <Table aria-label="demo table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripcion</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            {categories?.map((c) => (
              <TableBody>
                <TableCell>{c.CategoryID}</TableCell>
                <TableCell>{c.CategoryName}</TableCell>
                <TableCell>{c.Description}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex' }}>
                    <Box mr={2}>
                      <EditButton categoryId={c.CategoryID} name={c.CategoryName} description={c.Description}/>
                    </Box>
                    <DeleteButton categoryId={c.CategoryID} name={c.CategoryName} />
                  </Box>
                </TableCell>
              </TableBody>
            ))}

          </Table>
        </TableContainer>

      </Box>
    </>
  )
}

