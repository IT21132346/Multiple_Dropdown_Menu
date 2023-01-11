import React from 'react'
//import Header from './Header'
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Layout from './Layout';

const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* ...*/}
        </Route>
      </Routes></div>
  )
}

export default App