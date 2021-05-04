import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import RegistrationCompleted from './pages/RegistrationCompleted';
import Forgot from './pages/Forgot';
import ForgotCompleted from './pages/ForgotCompleted';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/forgot" component={Forgot} />
      <Route exact path="/forgot/completed" component={ForgotCompleted} />

      <Route exact path="/dashboard" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/register/completed" component={RegistrationCompleted} />
    </BrowserRouter>
  );
}

export default Routes;
