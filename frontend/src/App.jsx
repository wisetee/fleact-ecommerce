import { 
  createBrowserRouter, 
  Route, createRoutesFromElements, 
  RouterProvider, 
  Outlet
} from 'react-router-dom'

import './App.css'
import './index.css'

import Home from './templates/pages/Home'
import Shop from './templates/pages/Shop'
import Master from './templates/Master'
import Sale from './templates/pages/Sale'
import Account from './templates/pages/Account'
import Wishlist from './templates/pages/Wishlist'
import Cart from './templates/pages/Cart'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Master />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sale' element={<Sale />} />
      <Route path='cart' element={<Cart />} />
      <Route path='account' element={<Account />} />
      <Route path='wishlist' element={<Wishlist />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
