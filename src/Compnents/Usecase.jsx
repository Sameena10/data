import React from "react";
// import { useNavigate } from "react-router-dom";
import "../style/Usecase.css"
import {ShieldCheck,Banknote,Bitcoin,Brain} from "lucide-react";

const Usecase=()=>{
    const items =[
        {
           icon:<ShieldCheck size={45} color="#000" />,
           title:"Anti-Fraud",
           description:"Automatically identify potential crime rings and other suspicious behaviour to reduce fraud losses.",
        },
        {
           icon:<Banknote size={45} color="#000"/>,
           title:"Anti-Money Laundering",
           description:"Boost efficiency and ensure compliance while protecting your investment in AML tools.",
        },
        {
            icon:<Bitcoin size={45} color="#000"/>,
            title:"Cryptocurrency Investigations",
            description:"Integrate blockchain and other key data sources to identify bad actors in the crypto space."
        },
        {
            icon:<Brain size={45} color="#000"/>,
            title:"Intelligence Analysis",
            description:"Generate intelligence from vast amounts of disparate data to discoer hidden connections."
        },
    ];
    return(
    <div className="usecase">
      <section className="usecase-section">
        <div className="usecase-content">
            <h1>Use Case Overview</h1>
            <p>Solve the challanges of analyzing connected big data across a variety of usecases</p>
            <button className="demo-button">
                Get a live demo
            </button>
        </div>
      </section>
      <section className="main">
         <h2 className="section-title">A Range Of Solution In One Big Data Platform</h2>
         <p className="section-description">unleash the power of collaborative graph analytics on this this platform to identify and analyze patterns and connections hidden across disparate data sources. This flexible big data software support numerous application across industries, providing comprehensive solution for complex analytics needs</p>
      </section>
      <section className="solutions-section">
  <h2 className="section-title">Use Cases</h2>
  <div className="solutions-grid">
    {items.map((item, index) => (
      <div key={index} className="solution-box">
        <div className="icon">{item.icon}</div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="fist">
  <h2>Other Use Cases</h2>
  <ul className="usecase-grid">
    <li>Drug Discovery</li>
    <li>Social Network Analysis</li>
    <li>Root Cause Analysis</li>
    <li>Track and Trace</li>
    <li>Customer Intelligence</li>
    <li>Analytic Modernization</li>
  </ul>
</section>
</div>
)
}
export default Usecase;