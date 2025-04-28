import React from "react";
import "../style/HomePage.css"
import image from "../assets/screen.png"
import fly from "../assets/fly.png"
import water from "../assets/water.png";
import sit from "../assets/sit.png";
import connect from "../assets/connectivity.png"
import analysis from "../assets/Analysis.png"
import monitor from "../assets/monitor.png"

// Advance capablities 
const advancedCapabilities = [
  {
    title: "Social Media Monitoring",
    points: [
      "Threat Detection",
      "Sentiment & Reputation Analysis",
      "Event Detection & Situational Awareness",
      "Cyberbullying & Threat Assessment"
    ]
  },
  {
    title: "Geospatial Intelligence",
    points: [
      "Conflict & Military Activity Monitoring",
      "Disaster Response & Damage Assessment",
      "Infrastructure & Facility Mapping",
      "Illegal Activity Detection",
      "Humanitarian & Refugee Monitoring"
    ]
  },
  {
    title: "Visual Data Analysis",
    points: [
      "Behavioral Analysis from Surveillance Footage",
      "Monitoring Crowd Sizes and Movement",
      "Event & Incident Verification",
      "Geolocation of Visuals",
      "Chronolocation (Time Estimation)"
    ]
  },
  {
    title: "Personal Identifier Information",
    points: [
      "Access to 8+ billion public/person records",
      "Background Checks",
      "Identity Verification",
      "Missing Persons Investigations",
      "Criminal History Research"
    ]
  },
  {
    title: "Corporate Records",
    points: [
      "400+ million global company records",
      "Ownership, trade & assets",
      "Corporate Due Diligence",
      "Competitor Intelligence",
      "Corporate Fraud Investigation"
    ]
  },
  {
    title: "Dark Web",
    points: [
      "Data Breach Discovery",
      "Malware and Exploit Monitoring",
      "Brand and Executive Monitoring",
      "Fraud and Financial Crime Detection",
      "Human Trafficking and Illicit Goods Monitoring"
    ]
  },
  {
    title: "Country & Travel Records",
    points: [
      "Aggregate country & travel data",
      "Geo-political assessments",
      "Visa & Immigration Policy Analysis",
      "Flight and Maritime Tracking",
      "Tourism Trend Analysis"
    ]
  },
  {
    title: "Comprehensive Reporting",
    points: [
      "Threat Assessment Reports",
      "Country Risk Reports",
      "Incident & Crisis Reports",
      "Cyber Threat Intelligence Reports",
      "Executive Protection Briefs"
    ]
  },
  {
    title: "Leaked Data Analysis",
    points: [
      "Credential Leak Monitoring",
      "Data Breach Attribution",
      "Employee & Insider Threat Profiling",
      "PII and Sensitive Data Exposure",
      "Verification of Leaked Content"
    ]
  },
  {
    title: "Alerting and Commenting",
    points: [
      "Real-Time Threat Alerts",
      "Geofenced Incident Alerts",
      "Analyst Validation & Context",
      "False Positive Handling",
      "Domain & IP Monitoring"
    ]
  }
];

// 3d 
const useCases=[{
    title:"Monitor",
    image:fly,
    points:[
      "Big picture from data",
      "Trends and Sentiments",
      "Threat Discovery",
      "High Level Reporting"
    ]
},
{
  title:"Track",
  image:sit,
  points:[
    "Documental Analysis",
    "Powerful Social Media Analysis",
    "Tracking for threats, Data and key Actors",
    "Enhanced Intelligence"
  ]
},
{
  title:"Hunt",
  image:water,
  points:[
    "Unmasking hidden identities",
    "Malicious scores",
    "Reveal hidden networks",
    "Criminal Investigation"
  ]
}


];
function HomePage(){
        
return (
<>
<div className="container">
<section className="hero">
    <div className="hero-content">
        <div className="text-content">
            <p className="category">
                Open Source/Data/Law Enforcement
            </p>
            <h1>
              <span>A Complete</span><br />
              <span className="highlight">OSINT</span><br />
              <span>Investigation Suite<span className="dot">.</span></span>
            </h1>
        </div>
        <div className="image-content">
            <img src={image} alt="dashboard" className="mockup-image"/>
        </div>
    </div>
</section>
<section className="insight-section">
  <div className="insight-text-centered">
    <h1>Insight Velocity</h1>
    <p>
      DataSearch is an AI-powered, investigation-ready software platform built by intelligence professionals at OSINT Combine.
    </p>
    <p>
      Created to simplify and accelerate analyst workflows, DataSearch helps users quickly uncover key insights while working in low-attribution environments.
    </p>
    <p>
      Through a single, browser-based interface, users can search and collect data from the surface web, deep web, and dark web.
    </p>
    <p>
      A powerful tool for analysts and decision-makers who need speed, accuracy, and discretion.
    </p>
    <button className="demo-buttons">Request A Demo</button>
  </div>
</section>

<section className="usecase-sections">
  <div className="usecase-container">
    <h2 className="info-heading1">THREE DIMENSIONS</h2>
    <div className="usecases-grid">
  {useCases.map((useCase, index) => (
    <div className="usecase-card" key={index}>
      {useCase.image && (
        <div className="usecase-image-wrapper">
          <img
            src={useCase.image}
            alt={useCase.title}
            className="usecase-image"
          />
        </div>
      )}
      <h3>{useCase.title}</h3>
      <ul>
        {useCase.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>
</section>

<section className="needle-section">
      <div className="needle-wrapper">
        <div className="needle-content">
        <h2 className="needle-heading">Find What Others Can't See</h2>
<p className="needle-description">
  We supercharge your investigations, surfacing hidden threats and key opportunities faster than ever — and saving analysts 30% of their time.
  <br /><br />
  The world's biggest data haystacks? We cut straight through them.
</p>
<button className="needle-button">Request A Demo</button>
</div>
        <div className="needle-image">
          <img 
            src={connect} 
            alt="Insight Illustration" 
          />
        </div>

      </div>
    </section>
    <section class="analysis-section">
  <div class="analysis-container">
    <div class="analysis-image">
      <img src={analysis} alt="Analytics Illustration"/>
    </div>
    <div className="analysis-content">
  <h2>Actionable Intelligence Without the Noise</h2>
  <p>Get precise, targeted reports that highlight only the critical risks — no clutter, no false positives.</p>
  <p>Spend less time reviewing and more time making informed decisions.</p>
  <button className="demo-buttons">Request A Demo</button>
</div>

  </div>
</section>

<section class="risk-section">
  <div class="risk-container">  
  <div className="risk-content">
  <h2>Proactive Monitoring for Emerging Threats</h2>
  <p>Relying on static data can expose you to risks that evolve rapidly and unpredictably.</p>
  <p>With real-time intelligence, our platform keeps you informed of only the most relevant threats — as they happen.</p>
  <button className="demo-buttons">Request A Demo</button>
</div>
    <div class="risk-image">
      <img src={monitor} alt="Monitoring Screenshot"/>
    </div>
  </div>
</section>


<section className="capabilities-section">
  <h2 className="section-heading">Advanced Capabilities</h2>
  <div className="capabilities-columns">
    {advancedCapabilities.map((cap, index) => (
      <div className="capabilities-column" key={index}>
        <div className="capability-card">
          <h3>{cap.title}</h3>
          <ul>
            {cap.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>
<section class="connect-the-dots-section">
  <div class="content">
    <h2>Unlock New Insights Instantly.</h2>
    <p>
      Experience the next generation of due diligence! Access critical information faster, 
      smarter, and with zero hassle. Centralize your risk analysis with our intelligent platform.
    </p>
    <a href="#book-demo" class="cta-button">Request A Demo</a>
  </div>
</section>
</div>
</>
)
}

export default HomePage;

