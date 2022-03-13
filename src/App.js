import { Container, Row, Col, Table } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/layouts/navigation/NavBar'
import AdminNavList from './components/layouts/navigation/AdminNavList';
import SiteSelector from './components/forms/SiteSelector';
import AdminServerSettings from './components/layouts/AdminServerSettings';
import AdminUsers from './components/layouts/AdminUsers';
import AdminThemes from './components/layouts/AdminThemes';
import AdminBackups from './components/layouts/AdminBackups';
import Dashboard from './components/layouts/Dashboard';
import Login from './components/layouts/auth/Login';
import Register from './components/layouts/auth/Register';
import Footer from './components/layouts/Footer';

import Home from './views/Home';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'rgba(243, 243, 243, 0.959) !important';
  });

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/login'>
          <Container style={{ 'background-color': 'rgba(243, 243, 243, 0.959)' }}>
            <NavBar></NavBar>
          </Container>
          <Login></Login>
          <Footer></Footer>
        </Route>

        <Route path='/register'>
          <Container style={{ 'background-color': 'rgba(243, 243, 243, 0.959)' }}>
            <NavBar></NavBar>
          </Container>
          <Register></Register>
          <Footer></Footer>
        </Route>

        <Route>
          <Container style={{ 'background-color': 'rgba(243, 243, 243, 0.959)' }}>
            <NavBar></NavBar>
          </Container>

          <Container className='p-5 mt-3 mb-4 rounded-3 shadow'>
            <Switch>
              <Route path='/admin'>
                <Row className="mt-3 mb-3">
                  <Col sm={3}>
                    <AdminNavList></AdminNavList>
                  </Col>
                  <Col sm={9}>
                    <Switch>
                      <Container className='border border-light rounded-2 shadow-sm p-3'>
                        <SiteSelector></SiteSelector>
                        <Route exact path={['/admin', '/admin/settings']}>
                          <AdminServerSettings></AdminServerSettings>
                        </Route>
                        <Route exact path='/admin/users'>
                          <AdminUsers></AdminUsers>
                        </Route>
                        <Route exact path='/admin/themes'>
                          <AdminThemes></AdminThemes>
                        </Route>
                        <Route exact path='/admin/backups'>
                          <AdminBackups></AdminBackups>
                        </Route>
                      </Container>
                    </Switch>
                  </Col >
                </Row >
              </Route>
              <Route path='/dashboard'>
                <SiteSelector></SiteSelector>
                <Dashboard></Dashboard>
              </Route>
            </Switch>
          </Container >
          <Footer></Footer>
        </Route>
      </Switch>
    </>
  );
}

export default App;
