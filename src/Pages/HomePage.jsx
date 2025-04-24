import React from "react";
import "../style/HomePage.css"
import image from "../assets/screen.png"
import {FaProjectDiagram, FaDatabase, FaUsersCog, FaChartLine,FaLink,FaGlobe} from 'react-icons/fa'
const infoData = [
  {
    icon: <FaProjectDiagram className="info-icon" />,
    title: "Efficiently fuse your data",
    text: "Quickly fuse any of your desired internal and external data using unique technology.",
  },
  {
    icon: <FaDatabase className="info-icon" />,
    title: "...In a knowledge graph",
    text: "Re-organize and visualize your data around understandable elements like people, addresses, transactions, and more.",
  },
  {
    icon: <FaUsersCog className="info-icon" />,
    title: "Resolve entities at scale",
    text: "Find matching records, merge them, or create a master record with ease.",
  },
  {
    icon: <FaChartLine className="info-icon" />,
    title: "Advanced visual analysis",
    text: "Our tech ensures complex queries and graph algorithms are fast and intuitive to use.",
  },
  {
    icon: <FaGlobe className="info-icon" />,
    title: "Instant 360-degree Contextual profile",
    text: "Instant generate a 360-degree Contextual profile of any data element, derived from siloed data.",
  },
  {
    icon: <FaLink className="info-icon" />,
    title: "Remarkable Flexibility",
    text: "Platform provides flexibility to create new data and connections without disrupting system information.",
  },
];
const useCases=[{
    title:"Intelligence Analysis",
    desc:"Quickly generate actionable intelligence from vast amount of disparate data across numerous sources.",
},
{
   title: "Anti-Fraud",
   desc:"Automatically identify potential crime rings and other suspicious behavior to reduce the fraud loss",
},
{
    title: "Know Your Customer",
    desc:"Supplement existing KYC tools with context ad power of AI to quickly adapt to new scenerios and regulations",
},
{
title: "Investigation",
desc:"Integrate and analyz al of your data to dramatically accelerate investigation",
},
{
    title:"Entity Resolution",
    desc:"Find and manage non-obvious matching records across vast amount of data.",
},
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
<section className="data-info-section">
  <h2 className="info-heading">
    Siloed data holding you back?
  </h2>
  <p className="info-subtext">Unable to unify your data? Can't find patterns and connections across your data siloes? Unable to quickly incorporate new data in your analysis, or adapt to changing requirementss? We can help!</p>
  <div className="container">
        <div className="info-grid">
          {infoData.map((item, index) => (
            <div key={index} className="info-box">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
</section>
<section className="usecase-section">
  <div className="usecase-container">
    <h2 className="info-heading1">A Range Of Solution in One Platform</h2>
    <div className="usecases-grid">
        {useCases.map((useCase,index)=>(
             <div className="usecase-card" key={index}>
                <h3>{useCase.title}</h3>
                <p>{useCase.desc}</p>
                <a href="#">Learn more</a>
             </div>
        )
)}
    </div>
  </div>
</section>
{/* <section className="last">
  <p>Graph Technology increasingly powers the world's most innovative next-generation applications.This Platform can enable your organization to take advantage of power of graph</p>
</section> */}
</div>
</>
)
}

export default HomePage;