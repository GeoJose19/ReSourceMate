
import { BrowserRouter,createBrowserRouter ,Routes,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import React from 'react'
import { useState,useEffect } from 'react'
import Adminlog from './pages/Adminlog'
import UpdateProductDetails from './pages/Update'
import Delete from './pages/Delete'
import Choice from './pages/choice'
import SellerDash from './pages/SellerDash'
import SellerLogin from './pages/SellerLogin'

 export default function App() {

  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  

   return (
     <div>
       <BrowserRouter>
         <Routes>
           <Route index element={<LandingPage/>}/>
           {/* <Route path='/login' element={<LoginSignup/>}/> */}
           <Route path='/login' exact element={<LoginSignup
                    setToken={setToken}
                    />}
                    />
           <Route path='/register' element={<RegisterPage/>}/>
           {token?<Route path={'/dashboard'} element={ <Dashboard token={token} />} />:""}
           <Route path='/create' element={<Create/>}/>
           <Route path='/sellerlog' element={<SellerLogin/>}/>
           <Route path='/adminlog' element={<Adminlog/>}/>
           <Route path='/choice' element={<Choice/>}/>
           <Route path='/update' element={<UpdateProductDetails/>}/>
           <Route path='/delete' element={<Delete/>}/>
           <Route path='/seller' element={<SellerDash/>}/>
         </Routes>
       </BrowserRouter>
     </div>
   )
 }

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<LandingPage/>}>
//        <Route path="/landing" element={<RootLayout />}/>
//       <Route path='/login' element={<LoginPage/>}/>
//       <Route path='/dashboard' element={<Dashboard/>} loader={tasksLoader}/>
//     </Route>
//   )
// )

// function App() {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App


