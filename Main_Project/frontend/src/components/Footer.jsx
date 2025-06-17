
import React from 'react';
import '../assets/Pro.css';


const Footer = () => {
  return (
    <>
    <div id="footer" className="no-selection opened">
      {/* <div className="wrapper"></div> */}
        <ul className="quick-links">
          <li className="heading">Quick links</li>
          <li><a href="your-teams">Teams</a></li>
          <li><a href="">Account</a>
          </li>
          <li><a href="subscription">Subscription</a></li>
          <li><a href="invoices">Invoices</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="">Feeds</a></li>
        </ul>
        <ul className="help">
          <li className="heading">Help</li>
          <li><a href="help/getting-started">Getting started</a></li>
          <li><a href="help">Knowledge base</a></li>
          <li><a href="help/video-guides">Video guides &amp; webinars</a></li>
          <li><a href="help/keyboard-shortcuts">Keyboard shortcuts</a></li>
          <li><a href="help/tips-and-tricks">Tips &amp; tricks</a></li>
          <li><a href="">Contact support</a></li>
        </ul>
        <ul className="features">
          <li className="heading">Features</li>
          <li><a href="tour/employee-scheduling">Employee scheduling</a></li>
          <li><a href="tour/time-and-attendance">Time &amp; attendance</a></li>
          <li><a href="tour/reporting-and-payroll">Reporting &amp; payroll</a></li>
          <li><a href="tour/reminders-and-notifications">Reminders &amp; notifications</a></li>
          <li><a href="tour/time-off-management">Time off management</a></li>
          <li><a href="free-employee-scheduling-software">Free for small teams</a></li>
        </ul>
        <ul className="resources">
          <li className="heading">Resources</li>
          <li><a href="developers">Developer API</a></li>
          <li><a href="integrations?r=2c2p6q7h7e">Integrations</a></li>
          <li><a href="blog">Blog</a></li>
          <li><a href="time-clock" target="_time-clock">Time clock</a></li>
          <li><a href="customisations">Customizations</a></li>
          <li><a href="about-us">About us</a></li>
        </ul>
        <ul className="more">
          <li className="heading">More</li>
          <li><a href="terms-and-conditions">Terms &amp; conditions</a></li>
          <li><a href="privacy-policy">Privacy policy</a></li>
          <li><a href="cookie-policy">Cookie policy</a></li>
          <li><a href="gdpr-compliance">Data protection</a></li>
          <li><a href="pages">Site map</a></li>
          <li><a href="redirect-cross-domain?url=https%3a%2f%2fwww.findmyshift.co.uk%2fstaff-view%3fr%3d2c2p6q7h7e">Visit
            our UK site</a></li>
        </ul>
      </div>

    <div id="footer-information">
    <div id="company-branding"><a href="contact-us">Findmyshift</a></div>
    <div id="company-information" class="">© Copyright 2004-2024 - Findmyshift B.V.</div>
    <div id="language-selector"><i class="ion ion-earth"></i><select id="language-select">
            <option value="en-AU" url="https://www.findmyshift.com/au/">English (Australia)</option>
            <option value="en-CA" url="https://www.findmyshift.com/ca/">English (Canada)</option>
            <option value="en-IE" url="https://www.findmyshift.com/ie/">English (Ireland)</option>
            <option value="en-NZ" url="https://www.findmyshift.com/nz/">English (NZ)</option>
            <option value="en-GB" url="https://www.findmyshift.co.uk/">English (UK)</option>
            <option value="en-US" url="https://www.findmyshift.com/us/" selected="selected">English (US)</option>
            <option value="de-DE" url="https://www.findmyshift.de/">Deutsch</option>
            <option value="es-ES" url="https://www.findmyshift.es/">Español</option>
            <option value="fr-FR" url="https://www.findmyshift.fr/">Français</option>
            <option value="it-IT" url="https://www.findmyshift.it/">Italiano</option>
            <option value="nl-NL" url="https://www.findmyshift.nl/">Nederlands</option>
            <option value="pt-PT" url="https://www.findmyshift.com/pt/">Português</option>
            <option>More...</option>
        </select></div>
    </div>
    </>

  );
}

export default Footer;
