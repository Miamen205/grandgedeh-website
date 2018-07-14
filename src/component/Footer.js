import React from "react";
import {  NavLink } from 'reactstrap';

class Footerpage extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer navbar-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h4>Contact Us</h4>
                {/* <a
                  target="_blank"
                  href="https://www.google.com/maps/place/8444+N+90th+St+%23110,+Scottsdale,+AZ+85258"
                >
                  <i className="fa fa-home" aria-hidden="true" /> Need A Address Here
                </a> */}
                <br />
                <a id="social"  target="_blank" href="https://plus.google.com/u/1/109358351600991154763">
                  <i className="fa fa-envelope" aria-hidden="true" />{" "}
                  GrandGedehAssociation2@gmail.com
                </a>
                <br />
                <a id="social"  href="tel:602-419-0457">
                  <i className="fa fa-phone" aria-hidden="true" /> +1 (602)
                  419-0457
                </a>
                <p>
                <a id="social"  href=""> 
                  <i className="fa fa-globe" aria-hidden="true" >{" "}
                  Grand Gedeh Association.com
                  </i >
                  </a>
                </p>
              </div>
              <div className="col-lg-4 col-md-4">
                <h4>Quick Links</h4>
                <a id="social" href="/About">
                  <i className="fa fa-square-o" aria-hidden="true" /> About Us
                </a><br></br>
                <a target="_blank" href="https://www.facebook.com/groups/grandgedehassociation/about/">
                <a id="social" href="https://www.facebook.com/eyalartai" className="fa fa-facebook"> facebook </a>
                </a><br></br>
                <a id="social" target="_blank" href="https://www.youtube.com/channel/UCuVX_UiksaaswlTUT2Qv8jQ">
                <a id="social" href="https://www.youtube.com/channel/UCuVX_UiksaaswlTUT2Qv8jQ" className="fa fa-youtube"></a> youtube
                </a><br></br>
                <a id="social" target="_blank" href="https://soundcloud.com/volvetheprophet"></a>
                <a id="social" href="https://soundcloud.com/volvetheprophet" className="fa fa-soundcloud"></a> soundcloud
              </div>
              <div className="col-lg-4 col-md-4">
                <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footerpage;