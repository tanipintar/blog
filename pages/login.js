import React from 'react'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import LoginView from '../components/login'
const LoginPage = () => (
    <div>
        <Navbar title="Login Page" />
        <div className="py-5 success-color-dark" style={{height:'100vh'}}>
            <LoginView />
        </div>
    </div>
)
export default LoginPage



