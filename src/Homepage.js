import React from 'react';
import Navbar from './components/Navbar';
import './Homepage.css';

const HomePage = () => {
  return (
    <div>
      <header>
        World's Largest Medical Equipment Marketplace
      </header>
      <Navbar />
      <div className="sell-section">
        <div className="info-text">
          <b>
            1mdm.com is a leading ecommerce platform that<br />
            helps SMEs go global
          </b>
        </div>

        <div className="sell-text-container">
          <h2>
            <span>Sell on 1mdm.com</span>
          </h2>
          <p>
            <span>Reach millions of B2B buyers globally.</span>
          </p>
        </div>

        <div className="button-group">
          <button type="button" className="btn btn-danger">
            Start Selling
          </button>
          <button type="button" className="btn btn-secondary">
            Chat with Consultant
          </button>
        </div>

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
            <p>
              Connect with millions of business buyers from around the world.
            </p>
            <p>
              Get the tools and know-how to build a successful ecommerce presence for your business.
            </p>
            <p>
              Pocket more from each sale, with take rates as low as 0% in some cases.
            </p>
          </div>
        </div>

        <div className="below-video-text">
          <p>
            <b>Largest number of products & categories of</b>
          </p>
          <p>
            <b>medical devices on a single platform - 1mdm.com</b>
          </p>
        </div>

        <div className="connect-text-container">
          <p>
            <b>Connect with buyers worldwide for your product & start selling now.</b>
          </p>
        </div>

        <div className="grow-business-text">
          <p>
            <b>Grow your business with a suite of tools built for you.</b>
          </p>
        </div>

        <div className="custom-tools-section">
          <div className="custom-storefront">
            <h3>Custom Storefront</h3>
            <div className="custom-storefront-text">
              <p>Set up a store that showcases your brand.</p>
              <p>
                Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!
              </p>
            </div>
          </div>

          <div className="advertising-tools">
            <h3>Advertising Tools</h3>
            <div className="advertising-tools-text">
              <p>
                Increase exposure by up to 120% with a suite of smart advertising tools.
              </p>
              <p>
                Get your products placed in the right spots to be noticed by the exact audience you are targeting.
              </p>
            </div>
          </div>

          <div className="data-analytics">
            <h3>Data and Analytics</h3>
            <div className="data-analytics-text">
              <p>
                Optimize your every move with in-depth data and customer insights.
              </p>
              <p>
                Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!
              </p>
            </div>
          </div>

          <div className="customer-support">
            <h3>Customer Support</h3>
            <div className="customer-support-text">
              <p>Know you’re supported throughout your journey.</p>
              <p>
                From onboarding help to online chats to local support during business hours and account optimization tips — we're here for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="success-stories">
        <h3>Success Stories from 1mdm.com Sellers</h3>
        
        <div className="success-stories-content">
          <div className="content-slider">
            <div className="slide">
              <p>
                <strong>LTA International Global Services LLC</strong> is a
                Florida-based export management company that sells top medical
                device products from major US brands to importers and
                distributors around the globe. Founded in 1994 by Loyd, LTA's
                long-standing expertise in logistics and pricing has made it one
                of the most successful international trade businesses in the
                USA.
              </p>
            </div>
          </div>

          <div className="success-stories-text">
            <p>
              <strong>Mr. David</strong> runs a manufacturing company that works in
              the field of medical devices. With administrative and production
              facilities across the country, he upholds full respect for the
              environment and brings several years of experience using conventional
              IP systems.
            </p>
          </div>

          <div className="success-stories-text">
            <p>
              <strong>Rupesh Kanna</strong> found himself in between jobs in 2016.
              He started a blog, and wrote about his past experience as a lab
              technician while sharing his knowledge on imaging techniques. Kanna
              wanted to see more diversity in the medical devices industry and
              specialized in high-quality pigmented imaging processes. So, he
              decided to create his own product line.
            </p>
          </div>

          <div className="success-stories-text">
            <p>
              <strong>Lab Evolution</strong> is an import-export company of reagents
              and laboratory equipment established over a decade. Our company’s team
              of experts (in the instrumentations and reagents market) carefully follows
              customers all over the world. Lab Evolution is able to offer all the most
              competitive and popular brands and the best quality products for your laboratory.
            </p>
          </div>
        </div>
      </div>

      <div className="platform-section" style={{ backgroundColor: '#f1f1f1', padding: '20px 0' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Platform</h3>
        <div className="platform-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p><a href="/sell" style={{ textDecoration: 'none', color: '#000' }}>Sell on 1MDM</a></p>
          <p><a href="/pricing" style={{ textDecoration: 'none', color: '#000' }}>Pricing</a></p>
          <p><a href="/about" style={{ textDecoration: 'none', color: '#000' }}>About Us</a></p>
          <p><a href="/our-story" style={{ textDecoration: 'none', color: '#000' }}>Our Story</a></p>
          <p><a href="/careers" style={{ textDecoration: 'none', color: '#000' }}>Careers</a></p>
          <p><a href="/blog" style={{ textDecoration: 'none', color: '#000' }}>Blog</a></p>
          <p><a href="/brands" style={{ textDecoration: 'none', color: '#000' }}>Brands</a></p>
        </div>
      </div>

      <div className="press-room-policies-section" style={{ backgroundColor: '#f1f1f1', padding: '20px 0' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Press Room</h3>
        <div className="press-room-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p><a href="/press-room" style={{ textDecoration: 'none', color: '#000' }}>Images & B-roll</a></p>
        </div>

        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Policies</h3>
        <div className="policies-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p><a href="/terms-of-service" style={{ textDecoration: 'none', color: '#000' }}>Terms of Service</a></p>
          <p><a href="/privacy-policy" style={{ textDecoration: 'none', color: '#000' }}>Privacy Policy</a></p>
          <p><a href="/delivery-information" style={{ textDecoration: 'none', color: '#000' }}>Delivery Information</a></p>
        </div>
      </div>

      <div className="footer" style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <p>&#169; 2024 1MDM ⚡ by SuperLabs</p>
      </div>
    </div>
  );
};

export default HomePage;
