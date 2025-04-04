import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBoundary from '@components/ErrorBoundary';
import LoadingSpinner from '@components/LoadingSpinner';
import { AllProviders } from '@contexts/providers.jsx';

const DefaultLayout = lazy(() => import('@layouts/DefaultLayout'));
const HomePage = lazy(() => import('@pages/Home.jsx'));
const NotFoundPage = lazy(() => import('@pages/NotFound.jsx'));

const App = () => {
  return (
    <Router basename="/dice-game">
      <ErrorBoundary>
        <AllProviders>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Routes with DefaultLayout */}
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
              </Route>

              {/* 404 Not Found Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AllProviders>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
