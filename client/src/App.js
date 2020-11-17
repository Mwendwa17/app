import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import { AuthProvider } from './context/auth'
import AuthRoute from './utils/authRoute'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import SingleProject from './pages/SingleProject'

function App() {
     return (
          <AuthProvider>
               <Router>
                    <Container className='page-container'>
                         <Navbar />
                         <Route exact path='/' component={Home}/>
                         <AuthRoute exact path='/login' component={Login}/>
                         <AuthRoute exact path='/register' component={Register}/>
                         <Route exact path='/projects/:projectId' component={SingleProject} />
                    </Container>
               </Router>
          </AuthProvider>
     );
}

export default App;
