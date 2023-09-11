import React from 'react';
import Registration from "./registration/registration.component";
import CustomRender from "./custom-render-form/custom-render.component";
import { Route, Routes } from 'react-router-dom';
import StepperForm from './stepper-form/stepper-form.component';

function AppRouter(props: any) {
    return (
        <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/stepper-form" element={<StepperForm />} />
            <Route path="/custom-renderer" element={<CustomRender />} />
        </Routes>
    );
}

export default AppRouter;
