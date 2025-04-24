import React from 'react';

//Import Pages
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import FlowersCollection from '@/pages/Products/Flowers/Collection';
import PlantsCollection from '@/pages/Products/Plants/Collection';
import SingleProduct from '@/pages/SingleProduct';
import Cooperation from '@/pages/Cooperation';
import Contacts from '@/pages/Contacts';
import About from '@/pages/About';
import Cameras from '@/pages/Cameras';
import PriceList from '@/pages/PriceList';

import Footer from '@/layout/Footer';

//IMPORT
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
   const location = useLocation();

   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />

            {/* PRODUCTS PAGES */}
            <Route path='/products/flowers/' element={<Products />} />
            <Route path='/products/flowers/:collection' element={<FlowersCollection />} />

            <Route path='/products/plants' element={<Products />} />
            <Route path='/products/plants/:collection' element={<PlantsCollection />} />

            <Route path='/products/accessories' element={<Products />} />
            <Route path='/cooperation' element={<Cooperation />} />

            {/* SINGLE PRODUCT PAGE */}
            <Route path='/product' element={<SingleProduct />} />

            <Route path='/contacts' element={<Contacts />} />
            <Route path='/about' element={<About />} />
            <Route path='/cameras' element={<Cameras />} />
            <Route path='/pricelist' element={<PriceList />} />

            <Route
               path="*"
               element={<Navigate to="/" replace />}
            />
         </Routes>

         <Footer />
      </AnimatePresence>
   )
}

export default AnimatedRoutes