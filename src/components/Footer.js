import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Disclaimer */}
      <p className="footer-disclaimer">
        <strong>Disclaimer:</strong> Trademarks used on this website, including WhatsApp, WordPress and Google Sheets, 
        are the property of the respective owners and are not owned by us. These trademarks are used for reference 
        purposes only. Growby is not affiliated with or a part of WhatsApp™, Facebook Inc., or Meta. Growby is an 
        independent web portal and has no affiliation with Facebook, WhatsApp, Instagram, or any such related products.
      </p>

      {/* Copyright */}
      <p className="footer-copyright">
        2025 &copy; Copyright 2019-2023 by 
        <a href="https://growby.net" target="_blank" rel="noreferrer"> growby.net</a> | All Rights Reserved | 
        by Sprouto Infotech Solutions Pvt Ltd
      </p>
    </footer>
  );
}

export default Footer;
