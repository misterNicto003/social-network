import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormLogin } from '../../components/Forms/FormAuth/FormLogin'
import { FormRegister } from '../../components/Forms/FormAuth/FormRegister'

export const AuthPage = ({authLogin}) => {
  return (
    <Routes>
        <Route path='/' element={<FormLogin authLogin={authLogin}/>}/>
        <Route path='/Register' element={<FormRegister/>}/>
    </Routes>
  )
}
