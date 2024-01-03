import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="col-6 col-md-3"></div>
          <div className="col-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="index.php">Home</a></li>
              <li><a href="Visit Us">Contact Us</a></li>
              <li><a href="Privacy policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr className="small" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-12">
            <p className="copyright-text">
              Copyright © 2022 All Rights Reserved by
              <a href="C"><span className="logo">Chiffon Hugs & Co.</span></a>
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <ul className="social-icons">
              <li><a className="facebook" href="facebook.com"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="twitter" href="twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a className="linkedin" href="linkedin.com"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
