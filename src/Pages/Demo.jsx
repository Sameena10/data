import React from "react";
import "../style/Demo.css";

const Demo =()=>{
        return (
        <div className="book-demo">
          <div className="book-demo-container">
            <div className="book-demo-content">
              <div className="left-section">
                <h1>Minimize business risk <br /> Through our advance due diligence</h1>
                <p className="intro-text">
                  Using Open Source Intelligence (OSINT) we harness publically available data to deliver highly accurate, fully auditable insights - ensuring zero false positives fro your organization.
                </p>
                <div className="features">
                  <div className="feature">
                    <h3>Improve Efficiencies</h3>
                    <p>
                      Improve analyst efficiencies, including cost and time reduction of minimum 25% with zero false positives.
                    </p>
                  </div>
                  <div className="feature">
                    <h3>Reduce Blindspots</h3>
                    <p>
                    The FCA recommends open source Internet checks as best practice (FG 18/5). Manage and reduce risk by incorporating 100% of online sources into your processes.
                    </p>
                  </div>
                  <div className="feature">
                    <h3>Ongoing monitoring</h3>
                    <p>Manage risk with hyper accurate ongoing monitoring. We will monitor 100% of publicly available online data to help identify relevant risks.</p>
                  </div>
                </div>
              </div>
              <div className="right-section">
                <h2>Book A Demo</h2>
                <form className="demo-form">
                  <input type="text" placeholder="First Name*" required />
                  <input type="text" placeholder="Last Name*" required />
                  <input type="email" placeholder="Company Email*" required />
                  <input type="tel" placeholder="Phone Number*" required />
                  <input type="text" placeholder="Company Name*" required />
                  <input type="text" placeholder="Job Title*" required />
                  <input type="text" placeholder="Use Cases*" required />
                  <button type="submit">Submit</button>
                </form>
              </div>
      
            </div>
          </div>
            </div>
        );
      };
export default Demo;