/**
 * Web Vitals Performance Monitoring
 * 
 * This module provides performance monitoring capabilities for the React application
 * by measuring key web vitals metrics that impact user experience and SEO rankings.
 * 
 * Web Vitals are a set of standardized metrics that help developers understand
 * how their web applications perform from a user's perspective.
 */

/**
 * Reports web vitals metrics to the provided callback function
 * 
 * This function dynamically imports the web-vitals library and measures
 * five key performance metrics that are crucial for user experience:
 * 
 * @param {Function} onPerfEntry - Callback function to receive performance metrics
 *                                 Should accept a single parameter containing the metric data
 * 
 * @example
 * // Log metrics to console
 * reportWebVitals(console.log);
 * 
 * // Send metrics to analytics service
 * reportWebVitals((metric) => {
 *   analytics.send('web-vitals', metric);
 * });
 */
const reportWebVitals = onPerfEntry => {
  // Check if a valid callback function was provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library to reduce initial bundle size
    // This approach ensures the performance monitoring code is only loaded when needed
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Measure Cumulative Layout Shift (CLS)
      // CLS measures the sum of all individual layout shift scores for every unexpected
      // layout shift that occurs during the entire lifespan of the page.
      // A good CLS score is less than 0.1
      getCLS(onPerfEntry);
      
      // Measure First Input Delay (FID)
      // FID measures the time from when a user first interacts with a page
      // (i.e., clicks a link, taps on a button, or uses a custom, JavaScript-powered control)
      // to the time when the browser is actually able to begin processing event handlers
      // in response to that interaction. A good FID score is less than 100ms
      getFID(onPerfEntry);
      
      // Measure First Contentful Paint (FCP)
      // FCP measures the time from when the page starts loading to when any part of
      // the page's content is rendered on the screen. A good FCP score is less than 1.8s
      getFCP(onPerfEntry);
      
      // Measure Largest Contentful Paint (LCP)
      // LCP measures the time from when the page starts loading to when the largest
      // content element (image, video, or text block) is rendered on the screen.
      // A good LCP score is less than 2.5s
      getLCP(onPerfEntry);
      
      // Measure Time to First Byte (TTFB)
      // TTFB measures the time from when the user requests a URL to when the first
      // byte of the page is received by the user's browser. A good TTFB score is less than 800ms
      getTTFB(onPerfEntry);
    });
  }
};

// Export the function as the default export
// This allows other modules to import and use the performance monitoring functionality
export default reportWebVitals;
