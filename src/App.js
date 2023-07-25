import './App.css';
import Categories from './components/Categories';

import { AppBar, Toolbar, Typography, Container } from '@mui/material';


function App() {

  return (
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Panel de Administrador
          </Typography>
        </Toolbar>
      </AppBar>

      <Container fixed>
        <Categories />
      </Container>

    </div>

  );
}

export default App;
