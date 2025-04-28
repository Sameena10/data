import React from "react";
import "../style/Demo.css";

const Demo =()=>{
return (
  <div className="book-demo-modern">
  <div className="demo-left">
    <h1>Smarter Risk Decisions with Next-Gen Due Diligence</h1>
    <p className="intro-text">
    Our platform taps into Open Source Intelligence (OSINT) to transform public data into clear, actionable insights — delivering faster, more accurate results with zero false positives.

    </p>

    <div className="features-grid">
      <div className="feature-item">
        <h3>Accelerate Analyst Productivity</h3>
        <p>Save over 25% in time and costs with streamlined, hyper-relevant reporting.</p>
      </div>
      <div className="feature-item">
        <h3>Eliminate Blindspots</h3>
        <p>Access the full spectrum of online intelligence to uncover hidden risks early..</p>
      </div>
      <div className="feature-item">
        <h3>Monitor Threats in Real Time</h3>
        <p>Stay continuously informed with dynamic, real-time updates from public sources.</p>
      </div>
    </div>
  </div>

  <div className="demo-right">
    <div className="form-card">
      <h2>Book Your Personalized Demo</h2>
      <form className="demo-form">
        <input type="text" placeholder="First Name*" required />
        <input type="text" placeholder="Last Name*" required />
        <input type="email" placeholder="Business Email*" required />
        <input type="tel" placeholder="Phone Number*" required />
        <input type="text" placeholder="Company Name*" required />
        <input type="text" placeholder="Job Title*" required />
        <input type="text" placeholder="Primary Use Case*" required />
        <button type="submit">Request Demo</button>
      </form>
    </div>
  </div>
</div>
);
}
export default Demo;