import React from 'react';
import Navbar from './components/Navbar'; // Importing the Navbar component
import './Homepage.css'; // Importing the CSS file for the HomePage

const HomePage = () => {
  return (
    <div>
      <header>
        World's Largest Medical Equipment Market Place
      </header>
      <Navbar /> {/* Rendering the Navbar below the header */}

      <div className="sell-section">
        <div className="sell-text-container">
          <h2>Sell on 1mdm.com</h2>
          <p>Reach millions of B2B buyers globally.</p>
        </div>

        <div className="button-group">
          <button type="button" className="btn btn-danger">
            Start Selling
          </button>
          <button type="button" className="btn btn-secondary">
            Chat with Consultant
          </button>
        </div>

        <div className="info-text">
          <b>
            1mdm.com is a leading ecommerce platform that<br />
            helps SMEs go global
          </b>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <div className="video-container">
            <iframe
              width="800"
              height="480"
              src="https://www.youtube.com/embed/Py7rVoS9J5Q"
              title="Be Positive MRI in Medical Imaging"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-container">
            <p>Connect with millions of business buyers from around the world.</p>
            <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
            <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
