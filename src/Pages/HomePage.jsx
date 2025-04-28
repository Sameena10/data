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
          <h2 className="needle-heading">Find The Needle In The Haystack</h2>
          <p className="needle-description">
            Our investigations have found more risks in due diligence cases. Yet we have saved minimum 25% of the time of analysts.
            <br /><br />
            We find the smallest needles in the world's biggest haystack.
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
    <div class="analysis-content">
      <h2>Clear Risk Reporting, Efficiently Delivered</h2>
      <p>Receive concise, accurate findings that focus on relevant red flags only – all with zero false positives.</p>
      <p>No more wasting time sifting through lots of irrelevant data.</p>
      <button className="demo-buttons">Request A Demo</button>
    </div>
  </div>
</section>

<section class="risk-section">
  <div class="risk-container">
    
    <div class="risk-content">
      <h2>Ongoing Monitoring To Identify New Risks</h2>
      <p>The key challenge is out-of-date information which cannot predict an impending risk or potential disaster.</p>
      <p>Our Platform monitors ongoing risks using real-time online data. Monitor only those risks you need to.</p>
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

</div>
</>
)
}

export default HomePage;

