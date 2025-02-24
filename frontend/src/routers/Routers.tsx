import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegistrationPage from '@/pages/RegistrationPage';
// import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/NotFound';
// import DashBoardPage from '@/pages/DashBoardPage';
// import ResetPasswordPage from '@/pages/ResetPasswordPage';

const Routers = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegistrationPage/>} />
            {/* <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={<DashBoardPage />} /> 
            <Route path='/reset-password' element={<ResetPasswordPage />} /> */}
            <Route path='/*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
}

export default Routers;