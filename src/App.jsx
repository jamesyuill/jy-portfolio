import React, { Suspense, useRef, useState } from 'react';
import '../src/App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import AFShapeGenerator from './pages/AFShapeGenerator';
import Test from './pages/Test';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shape-generator" element={<AFShapeGenerator />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
