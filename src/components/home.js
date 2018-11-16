import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="css/home.css" />
        <header>
          <div class="help-social-header">
            <div class="empty-div"></div>
            <div class="contact-number">
              <div>+ 91-8688477650</div>
            </div>
            <div class="social-icon">
              <a href="www.fb.com" target="_blank">
                <img src="images/fb.png" alt="Smiley face" height="42" width="42" />
              </a>
              <a href="www.plus.google.com" target="_blank">
                <img src="../images/googleplus.png" alt="Smiley face" height="42" width="42" />
              </a>
            </div>
          </div>
        </header>

        <div class="menu-options">
          <div class="logo">
            <img src="../images/logo.png" class="logo-icon" />
            <div class="logo-label">kaamwala.com</div>
          </div>
          <div class="menu">
            <div class="navbar">
              <a href="#home">Home</a>
              <a href="#news">About us</a>
              <a href="#service">Services</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
              <a class="book-now" href="#contact">Book Now</a>
            </div>
          </div>
        </div>
        <div class="first-section">
          <img src="../images/washhand.png" class="back-image" />
          <img src="../images/sine.png" class="sine-image" alt="Smiley face" height="42" width="42" />
        </div>
      </div>
    );
  }
}

export default Home;