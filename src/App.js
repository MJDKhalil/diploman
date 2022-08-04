import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate';
import Layout from './hocs/Layout';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import store from './store';
import WelcomePage from './pages/WelcomePage';
import NotFound from './components/NotFound';
import PrivateOutlet from './components/PrivateOutlet';
import RequestAdmission from './pages/RequestAdmission';
import ApplicationForm from './pages/ApplicationForm';
import Guid from './pages/Guid';
import RequestService from './pages/RequestService';
import VisaAssist from './pages/VisaAssist';
import PremuimSupport from './pages/PremuimSupport';
import ScrollToTop from './components/ScrollToTop';
import TermsAndConditions from './pages/TermsAndConditions';
import Forms from './pages/Forms';
import UsaAppForm from './pages/UsaAppForm';

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route exact path='/' element={<WelcomePage/>} />
            <Route path='/admission' element={<RequestAdmission/>} />
            <Route path='/visa-assist' element={<VisaAssist/>} />
            <Route path='/premuim-support' element={<PremuimSupport/>} />
            <Route path='/guid' element={<Guid/>} />
            <Route path='/request-service' element={<RequestService/>} />
            <Route path='/forms' element={<Forms/>} />
            <Route path='/uk-application-form' element={<ApplicationForm/>} />
            <Route path='/usa-application-form' element={<UsaAppForm/>} />

            <Route element={<PrivateOutlet/>}>
              {/* <Route path='/application-form' element={<ApplicationForm/>} /> */}
            </Route>

            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/reset-password' element={<ResetPassword/>} />
            <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
            <Route path='/activate/:uid/:token' element={<Activate/>} />
            <Route path='/terms' element={<TermsAndConditions/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
