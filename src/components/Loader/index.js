import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile Animation (Completely Different)
  if (isMobile) {
    return (
      <div className="mobile-loader-wrapper">
        {/* Background Gradient */}
        <div className="mobile-loader-bg"></div>

        {/* Main Content */}
        <div className="mobile-loader-content">
          {/* Animated Logo */}
          <div className="mobile-logo-animated">
            <span className="logo-emoji">🌾</span>
          </div>

          {/* Title */}
          <h1 className="mobile-title">FarmConnect</h1>

          {/* Animated Loading Bars */}
          <div className="mobile-animated-bars">
            <div className="bar-item"></div>
            <div className="bar-item"></div>
            <div className="bar-item"></div>
            <div className="bar-item"></div>
            <div className="bar-item"></div>
            <div className="bar-item"></div>
            <div className="bar-item"></div>
            <div className="bar-item"></div>
          </div>

          {/* Subtitle */}
          <p className="mobile-subtitle">Your Farm Dashboard Loading</p>

          {/* Progress Indicator */}
          <div className="mobile-progress-bar">
            <div className="mobile-progress-fill"></div>
          </div>
        </div>

        {/* Floating Emojis Background */}
        <div className="mobile-floating-bg">
          <div className="mobile-float-item f1">🚜</div>
          <div className="mobile-float-item f2">🌱</div>
          <div className="mobile-float-item f3">💧</div>
          <div className="mobile-float-item f4">🐛</div>
          <div className="mobile-float-item f5">☀️</div>
          <div className="mobile-float-item f6">🌾</div>
        </div>
      </div>
    );
  }

  // Desktop Animation (Original)
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        {/* Main Animated Circle */}
        <div className="loader-circle">
          <div className="circle-inner"></div>
        </div>

        {/* Rotating Border */}
        <div className="rotating-border"></div>

        {/* Animated Icons */}
        <div className="floating-icons">
          <div className="floating-icon icon-1">🌾</div>
          <div className="floating-icon icon-2">🚜</div>
          <div className="floating-icon icon-3">🌱</div>
          <div className="floating-icon icon-4">💧</div>
          <div className="floating-icon icon-5">🐛</div>
          <div className="floating-icon icon-6">☀️</div>
        </div>

        {/* Text Section */}
        <div className="loader-text">
          <h2>FarmConnect</h2>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <p className="loader-message">Preparing your farm dashboard</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p className="progress-text">Loading...</p>
        </div>
      </div>

      {/* Background Animation */}
      <div className="loader-background">
        <div className="bg-particle particle-1"></div>
        <div className="bg-particle particle-2"></div>
        <div className="bg-particle particle-3"></div>
        <div className="bg-particle particle-4"></div>
        <div className="bg-particle particle-5"></div>
      </div>
    </div>
  );
};

export default Loader;