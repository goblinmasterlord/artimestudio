import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { SpeedInsights } from "@vercel/speed-insights/react";

// Add a loading component for Suspense
const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-gray-500 animate-pulse">Betöltés...</p>
    </div>
  </div>
);

// Add event listener to help debug and fix duplicate content issues
if (process.env.NODE_ENV === 'development') {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        const mainElements = document.querySelectorAll('main');
        if (mainElements.length > 1) {
          console.warn('Multiple main elements detected:', mainElements.length);
          // Keep only the most recent main element
          for (let i = 0; i < mainElements.length - 1; i++) {
            mainElements[i].remove();
          }
        }
      }
    }
  });
  
  // Start observing once DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
      <SpeedInsights />
    </Suspense>
  </React.StrictMode>
);