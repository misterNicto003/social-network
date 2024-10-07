import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/Profile/Profile'
import { SearchAuto } from '../pages/SearchAuto/SearchAuto'
import { MyCars } from '../pages/MyCars/MyCars'
import { MyOrders } from '../pages/MyOrders/MyOrders'
import { AboutUs } from '../pages/AboutUs/AboutUs'

export const Routing = () => {
  return (
    <Routes>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/SearchAuto' element={<SearchAuto/>}/>
        <Route path='/MyCars' element={<MyCars/>}/>
        <Route path='/MyOrders' element={<MyOrders/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
    </Routes>
  )
}
