import React from "react";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="copyright">© {new Date().getFullYear()}</div>
      <div className="mainsite">
        <a href="http://busseinc.com">Busse Hospital Disposables</a>
      </div>
      <div className="author">Written by Jeff Modell</div>
    </div>
  </footer>
);

export default Footer;
