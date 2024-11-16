import "./Footer.css";
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer mt-5">

        <div className="footer-main container">
            <div className="footer1">
                <div className="footer1-header">
                    <h2>Join Our Exclusive Platform Now</h2>
                    <p>
                    Join us for an interactive demo session where you&#39;ll get a firsthand experience of our latest product. During the session, we&lsquo;ll walk you through key features, showcase how the product works in real time, and explain its practical applications. This is a great opportunity to ask questions, gain insights, and understand how this solution can benefit you or your business.
                    </p>
                </div>
 
            </div>

            <div className="footer2">
                <div className="footer2-links">
                    <Link to="">Home</Link>
                    <Link to="blog">Blog</Link>
                    <Link to="about">About</Link>
                    <Link to="account">Account</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </div>
        </div>
        <hr  />
        <div className="footer-rights">
            &copy; 2024 Copyright & Kushal Khandhara
        </div>
    </div>
  )
}
