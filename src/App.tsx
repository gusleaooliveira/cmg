import React from 'react';
import {
  Container,
  Content
} from './index.styled';
import { NavbarHeader, NavbarLeft } from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Login } from './pages/index'
import { useSelector } from 'react-redux';
import { RootState } from './store';
import RoutesParams from './Routes';
import { } from './components/index';

function App() {
  const { token } = useSelector((state : RootState) => state.clickState)

  return (
    <>
      {token === '' ?
          <Login />
        :
        <BrowserRouter>
          <Container>
            <NavbarHeader />
            <NavbarLeft />
            <Content>
              <RoutesParams />
            </Content>
          </Container>
        </BrowserRouter>
      }
    </>
  );
}

export default App
