import React, { Suspense, useRef, useState } from 'react';
import '../src/App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import AFShapeGenerator from './pages/AFShapeGenerator';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cube-generator" element={<AFShapeGenerator />} />
      </Routes>
    </>
  );
}

export default App;
