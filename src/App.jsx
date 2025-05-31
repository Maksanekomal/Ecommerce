import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from './components/Layout/UserLayout'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {Toaster} from "sonner";
import Profile from './Pages/Profile';
import CollectionPage from './Pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import Checkout from './components/Cart/Checkout'
import OrderConfirmationPage from './Pages/OrderConfirmationPage'
import OrderDetailsPage from './Pages/OrderDetailsPage'
import MyOrdersPage from './Pages/MyOrdersPage'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './Pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProduct from './components/Admin/EditProduct'
import OrderManagement from './components/Admin/OrderManagement'



function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<UserLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="collections/:collection" element={<CollectionPage />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-confirmation" element={<OrderConfirmationPage />} />
      <Route path="order/:id" element={<OrderDetailsPage />} />
      <Route path="my-orders" element={<MyOrdersPage />} />
      </Route>
             {/* Admin Layout and Routes */}
      <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminHomePage />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="products" element={<ProductManagement />} />
      <Route path="products/:id/edit" element={<EditProduct />} />
      <Route path="orders" element={<OrderManagement />} />

      </Route>



    </Routes>
    </BrowserRouter>
  )
}

export default App


