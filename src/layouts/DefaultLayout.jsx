import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Outlet>{children}</Outlet>
        </div>
      </main>

      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
