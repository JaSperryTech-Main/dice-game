import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@layouts/DefaultLayout';
import HomePage from '@pages/Home';
import ReactPage from '@pages/React';
import NotFoundPage from '@pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with DefaultLayout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/react" element={<ReactPage />} />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
