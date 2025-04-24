import React from "react";
import "../style/Product.css"
import photo from "../assets/company.png"
import { FaCheck } from 'react-icons/fa';
import { useState } from "react";

  
const Product=()=>{
    const cardsData = [
        {
          title: "No-code Data Fusion & Ontology",
          features: [
            "Data Ingestion & Cleansing",
            "Knowledge Graph & Ontology",
            "Entity Resolution",
          ],
        },
        {
          title: "Dynamic Data Analytics & Prototyping",
          features: [
            "Graph Analytics",
            "Artificial Intelligence",
            "OLAP & Vector",
          ],
        },
        {
          title: "Robust Investigation",
          features: [
            "Visual Queries",
            "Search & Summaries",
            "Link Chart",
          ],
        },
        {
          title: "Intelligent Automation",
          features: [
            "Application Development Environment",
            "App Framework",
            "Real-time API",
          ],
        },
      ];

      const whyItems = [
        {
          title: "Advanced Analytics in One Platform",
          content: "Combine, transform, and analyze your data in one platform, integrating graph analytics, knowledge graph, AI, semantics, machine learning, and OLAP for comprehensive insights."
        },
        {
          title: "Prototype with Agility and Scalability",
          content: "Quickly build, test, and iterate on new solutions using scalable architectures and agile methodologies tailored for evolving needs."
        },
        {
          title: "Easy to use and manage",
          content: "Enjoy a clean and intuitive interface designed for both technical and non-technical users, simplifying the overall experience."
        },
        {
          title: "Time-to-Value",
          content: "Rapid deployment and actionable insights reduce the time it takes to realize value from your data projects."
        },
      ];
      
        const [openIndex, setOpenIndex] = useState(0); // default open first item
      
        const toggleIndex = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
      

 return(
    <div className="product-overview">
     <section className="hero-section">
  <div className="hero-container">
    <div className="hero-text">
      <h1>PRODNAME Graph/AI Analytics and Investigation Platform</h1>
      <p>
        Unlock Insights with Graph and AI-Driven Data Fusion, Analysis Prototyping,
        Investigation and Decision Automation.
      </p>
      <button className="cta-button">Try It!</button>
    </div>
    <div className="hero-image">
      <img src={photo} alt="Graph/AI Visualization" />
    </div>
  </div>
</section>
<section className="platform-section">
<h2 className="section-heading">One Unified Graph & AI Enterprise Platform</h2>
        <div className="platform-grid">
          {cardsData.map((card, index) => (
            <div className="platform-card" key={index}>
              <h3>{card.title}</h3>
              <hr />
              <ul>
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="bottom-text">A SINGLE GRAPH/RELATIONAL DATABASE</p>
</section>
<section className="feature-section">
      <div className="feature-left">
        <h2 className="heading blue">Data Fusion & Ontology »</h2>
        <h2 className="heading blue">Data Analysis & Prototyping »</h2>
        <h2 className="heading gray">Intelligent Automation »</h2>
        <h2 className="heading gray">Robust Investigation »</h2>
      </div>

      <div className="feature-right">
        <h3 className="right-heading">
          Easily combine, transform and<br/> organize your data with a scalable knowledge graph
        </h3>
        <ul className="features-list">
          <li>
            <FaCheck className="icon" />
            <strong>Fuse vast amounts of disparate data </strong> with exceptional accuracy and performance
          </li>
          <li>
            <FaCheck className="icon" />
            <strong>Gain a complete and accurate contextual view </strong> of entities, organizations, places,
            transactions, events, and anything else
          </li>
          <li>
            <FaCheck className="icon" />
            Expand to many use cases without needing to re-code
          </li>
          <li>
            <FaCheck className="icon" />
            <strong>Reduce Prep time:</strong> Clean, link and resolve entities without coding
          </li>
        </ul>
      </div>
    </section>
    <section className="why-section">
      <h2 className="why-title">Why?</h2>
      <div className="why-content">
        <div className="why-left">
          {whyItems.map((item, index) => (
            <div className="why-item" key={index}>
              <div className="why-header" onClick={() => toggleIndex(index)}>
                <span className="symbol">{openIndex === index ? '–' : '+'}</span>
                <span className={`why-text ${openIndex === index ? 'active' : ''}`}>
                  {item.title}
                </span>
              </div>
              {openIndex === index && (
                <p className="why-description">{item.content}</p>
              )}
              <div className="underline" />
            </div>
          ))}
        </div>
        <div className="why-right">
          <div className="bubbles">
            <div className="bubble big center" />
            <div className="bubble small top" />
            <div className="bubble medium left" />
            <div className="bubble small right" />
            <div className="bubble medium bottom" />
          </div>
        </div>
      </div>
    </section>
</div>
)
}
export default Product;