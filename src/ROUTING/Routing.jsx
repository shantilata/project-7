import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import RegForm from '../COMPONENT/REG FORM/RegForm'
import Home from '../COMPONENT/HOME/Home'
import Header from '../LAYOUT/Header'
import LogIn from '../COMPONENT/LOG IN/LogIn'
import Profile from '../COMPONENT/PROFILE/Profile'
import Formik from '../COMPONENT/FORMIK/Formik'
import ProRouting from '../COMPONENT/Protected Routing/ProRouting'

// import FormikReg from '../COMPONENT/FORMIK REG/Formik_Reg'


const Routing = () => {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route element={<ProRouting />}>
          <Route path="profile" element={<Profile />} />
          {/* <Route path="login_form" element={<LogIn />} /> */}
        </Route>

        <Route path="reg_form" element={<RegForm />} />
        <Route path="login_form" element={<LogIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="formik_page" element={<Formik />} />
        {/* <Route path="formik_reg" element={<FormikReg />} /> */}

      </Routes>
    </Router>

  )
}

export default Routing