import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          {/* quick links */}
          <div className="col-md-3 col-sm-6">
            <h3 className="text-white">Quick Links</h3>
            <ul>
              <li className="mb-3">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-3">
                <a href="/contact-us">Contact Us</a>
              </li>
              <li className="mb-3">
                <a href="help.html">Help</a>
              </li>
              <li className="mb-3">
                <a href="faqs.html">Faqs</a>
              </li>
              <li className="mb-3">
                <a href="terms.html">Terms of use</a>
              </li>
              <li>
                <a href="privacy.html">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h3 className="text-white">Get in Touch</h3>
            <ul>
              <li className="text-white">
                <i className="fa fa-map-marker" /> 123 Sebastian, USA.</li>
              <li className="text-white">
                <i className="fa fa-mobile" /> 333 222 3333 </li>
              <li className="text-white">
                <i className="fa fa-phone" /> +222 11 4444 </li>
              <li className="text-white">
                <i className="fa fa-envelope-open" />
                <a href="mailto:example@mail.com"> mail 1@example.com</a>
              </li>
              <li>
                <i className="fa fa-envelope-open" />
                <a href="mailto:example@mail.com"> mail 2@example.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            {/* newsletter */}
            <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
            <p className="text-white  mb-3">Free Delivery on your first order!</p>
            <form action="#" method="post">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" name="email" required />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                 </button>
              </div>
            </form>
            {/* //newsletter */}
          </div>
          {/* social icons */}
          <div className="col-md-3 col-sm-6">
            <h3 className="text-white">Follow Us on</h3>
            <div>
              <ul>
                <li>
                  <a href="/#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* //social icons */}
        </div>
        {/* copyright */}
        <div className="copy-right py-3">
          <div className="container">
            <p className="text-center text-white">© 2018 Give Away Store. All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
