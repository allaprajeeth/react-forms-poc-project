import { Fragment } from 'react';
import './App.css';
// import CustomRender from './custom-render-form/custom-render.component';
// import StepperForm from './stepper-form/stepper-form.component';
// import Registration from './registration/registration.component';
import AppRouter from './AppRouter';
import Navbar from './nav-bar/nav-bar.component';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <AppRouter />

      {/* <CustomRender />
      <StepperForm />
      <Registration /> */}
    </Fragment>
  );
};

export default App;
