import React from 'react';
import './App.css';
import './index.css';
import { Layout } from './layout/layout';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Mainpage } from './Pages/mainpage';
import { Contacts } from './Pages/contacts/contacts';
import { Clients } from './Pages/clients/clients';
import { Management } from './Pages/management/management';
import { History } from './Pages/history/history';
import { Vacansies } from './Pages/vacancies/vacancies';
import { News } from './Pages/news/news';
import { About } from './Pages/about/about';
import { Shop } from './Pages/shop/shop';
import { Cart } from './Pages/cart/cart';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Mainpage />} />
          <Route path="about" element={<About />} />
          <Route path="clients" element={<Clients />} />
          <Route path="history" element={<History />} />
          <Route path="news" element={<News />} />
          <Route path="management" element={<Management />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="vacansies" element={<Vacansies />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
{/*
         <Layout>
          // <Mainpage />
          // <Contacts /> 
         </Layout>
  */}
       </Route>
    </Routes>
    </>
  );
};

export default App;
