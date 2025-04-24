import React from "react";
import "../style/Footer.css"
function Footer(){
return(
    <>
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-column">
                <h4>Product</h4>
                <ul>
                    <li>Overview</li>
                    <li>Technology</li>
                    <li>AI & ML</li>
                    <li>Querying</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Use Cases</h4>
                <ul>
                    <li>AML</li>
                    <li>Anti-Fraud</li>
                    <li>Defense</li>
                    <li>Intelligence Anaylysis</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Career</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                    <li>General</li>
                    <li>OSINT Guide</li>
                    <li>Law Enforcement</li>
                    {/* <li>Intelligence Anaylysis</li> */}
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            2023. All right reserved
        </div>
    </footer>
    </>
)
}
export default Footer;