import React, { Suspense } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Loader from './Loader';

const Homepage = React.lazy(() => import("./Homepage"))
const UserDetails = React.lazy(() => import("./UserDetails"))
export default function RoutesWeb() {

  return (
    <div>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/userDetails' element={<UserDetails/>}></Route>
      </Routes>
      </Suspense>
    </div>
  )
}

