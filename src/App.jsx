import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';

import Page1 from './components/Page1'
import Page2 from './components/Page2'
import PageButtons from './components/PageButton'

import { AnimatePresence } from 'framer-motion';

export default function App() {
    const location = useLocation();

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path='/page1' element={<Page1/>} />
                    <Route path='/page2' element={<Page2/>} />
                </Routes>
            </AnimatePresence>
            <PageButtons/>
        </div>
    )
}
