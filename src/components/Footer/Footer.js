import "./Footer.css"
import Buttons from "../Buttons/Buttons";
import Footer_logo from "../../images/footer_logo.png";
import {Link} from "react-router-dom"


const Footer = (props) => {
    return (
      <div className="footer">
        <div className={`footer_top ${props.displays}`}>
          <p className="text">
            Have a vision in mind?</p>
            <p className="text"> Lets help you turn your vision into a
            finished product.
          </p>
          <Buttons
                buttontype="btn orange_btn big_btn"
                value="READ CASE STUDY"
              />
        </div>
        <div className="footer_bottom">
            <img src={Footer_logo} className="footer_logo" alt="" />
            <div className="pages">
                <p className="footer_title">Pages</p>
                <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/works">Our Works</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                </ul>
            </div>
            <div className="contacts">
                <p className="footer_title">Contact</p>
                <p>No. 5 Siraso close, Wuse Zone 7, Abuja - Nigeria</p>
                <p>hello@techtanks.tech</p>
                <p>www.techtanks.tech</p>
                <p>+234 70 6578 4089</p>
            </div>
        </div>
      </div>
    );
}
 
export default Footer;