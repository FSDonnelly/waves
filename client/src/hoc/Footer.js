import React from 'react';

const Footer = () => {
  return (
    <footer className='bck_b_dark'>
      <div className='container'>
        <div className='logo'>Waves</div>
        <div className='wrapper'>
          <div className='left'>
            <h2>Contact Information</h2>
            <div className='business_nfo'>
              <div className='tag'>
                <i className='far fa-compass icon' />
                <div className='nfo'>
                  <div>Address</div>
                  <div>1234 Main St.</div>
                </div>
              </div>
              <div className='tag'>
                <i className='fas fa-phone icon' />
                <div className='nfo'>
                  <div>Phone</div>
                  <div>(555) 555 - 5555</div>
                </div>
              </div>
              <div className='tag'>
                <i className='far fa-clock icon' />
                <div className='nfo'>
                  <div>Working Hours</div>
                  <div>9 AM to 10 PM Mon - Sat</div>
                </div>
              </div>
              <div className='tag'>
                <i className='far fa-envelope icon' />
                <div className='nfo'>
                  <div>Email</div>
                  <div>swaves@fakemail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <h2>Be the first to know</h2>
            <div>
              <div>
                Get all the latest information on events, sales and offers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
