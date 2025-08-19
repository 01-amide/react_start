/**
 * React Application Entry Point
 * 
 * This file serves as the main entry point for the React application.
 * It imports the necessary dependencies and renders the root App component
 * into the DOM element with id 'root'.
 */

// Import React and ReactDOM for rendering
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the main App component
import App from './App';
// Import web vitals reporting function for performance monitoring
import reportWebVitals from './reportWebVitals';

// Create a root container for the React application
// This is the new React 18+ way of rendering applications
// It enables concurrent features and better performance
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode
// StrictMode helps identify potential problems in the application during development
// It runs additional checks and warnings for:
// - Identifying components with unsafe lifecycles
// - Warning about legacy string ref API usage
// - Warning about deprecated findDOMNode usage
// - Detecting unexpected side effects
// - Detecting legacy context API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance Monitoring Setup
// 
// Web Vitals are a set of metrics that help measure the performance and user experience
// of web applications. This function measures:
// - CLS (Cumulative Layout Shift): Measures visual stability
// - FID (First Input Delay): Measures interactivity
// - FCP (First Contentful Paint): Measures loading performance
// - LCP (Largest Contentful Paint): Measures loading performance
// - TTFB (Time to First Byte): Measures server response time
//
// To start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
