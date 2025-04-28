import React from "react";
import "../style/Technology.css"
const Technology=()=>{
    const sectionsData = [
        {
          title: "Full-Stack Analytics Platform",
          description: "DataWalk is a full-stack analytics platform which is architected to seamlessly scale to handle vast amounts of data, regardless of the shape of your data and the questions you want to ask of your data.",
          points: [
            "Ingest without extensive preparation, using either passive sinks, an ETL tool, DataWalk connectors, or the REST API. There’s no need to worry about how you will want to later use or analyze the data. High performance, full security, and no need to map extensive ontologies.",
            "Transform data during or after ingest, so that it takes the shape that you want. DataWalk can automatically repeat transformation and normalization steps with new data.",
            "Model data in a highly flexible knowledge graph, re-structuring data around understandable entities such as people, events, transactions, or anything else.",
            "Store data with full compression on a highly scalable, secure embedded database.",
            "Query data visually and ask any question of your data without limitations.",
            "Visualize your results.",
            "The DataWalk API enables automated workflows.",
            "A User Interface for all of the above eliminates the cost and delays associated with relying on data scientists and scripting."
          ],
          footer: "Integrated management tools to facilitate software deployment, upgrades, and backups, plus integrated monitoring tools."
        },
        {
           title:"Unique DataSearch Technology For Data Processing and Querying",
           description:"DataSearch is a comprehensive system with various intuitive interfaces for accessing and analyzing data. The application server level takes requests from users or other systems and transforms them to a set of executions at the graph/relational database layer. DataWalk’s unique scale-out technologies are in the areas of information processing and querying at the database layer." ,
           points:[
            "Provides multiple intuitive interfaces for seamless data access and analysis",
            "Translates user/system requests into optimized database queries",
            "Scales effectively for both graph and relational operations"
           ],
           footer:"Helps maintain and demonstrate compliance with security and privacy standards"
        },
        {
            title:"Hybrid Graph/Relational Database",
            description:"A foundational technology of DataWalk is an innovative graph/relational database hybrid. Data and connections are persisted, and data is shared at the data level to facilitate multi-user access and collaboration. The graph structure enables: the management and analysis of complex data; the ability to derive value from connections as well as values; support for graph algorithms which can be run across vast amounts of data; and analysis of the relationships between individual objects on a link chart. Complementing this is the relational structure, which enables OLAP analytics and traditional analysis of data values. The result is a powerful capability not only to do both graph and relational/OLAP functions, but to do this against the same instance of data without requiring data movement.",
            points:[
                "Combine relational and graph database benefits in one system",
                "Analyze both values and relationships with powerful tools",
                "Enables collaborative multi-user access without duplication"
            ],
            footer:"Unifies OLAP and graph analytics on a single data instance"
        },
        {
            title:"Designed for scalability",
            description:"DataWalk is architected to scale in order to enable analysis of vast volumes of data. DataWalk achieves this using a horizontally scalable Massively Parallel Processing (MPP) architecture for storing and processing data, with unique technology that solves the three major challenges associated with horizontal scalability, regardless of the business model or data mapping performed:even distribution of data across multiple node, no data rebalancing needed to execute queries, and maximum information-join on stored content.DataWalk’s unique, commercial-grade data storage solution provides flexible information management with high efficiencies required for deploying enterprise-class analytical environments. This technology delivers fast, complex, multi-dimensional analyses that are quickly completed on large, multi-billion record data sets.",
            points:[
                  "Massively Parallel Processing (MPP) for fast data computation",
                  "Even data distribution across nodes for optimal performance",
                  "No query slowdown even with massive datasets"
            ],
            footer:"Built to power enterprise-scale analytics environments efficiently"
        },
        {
            title:"Unique Knowledge Graph",
            description:"The DataSearch universe viewer is an enterprise knowledge graph  which provides a view of all imported data through an intuitive graphical interface showing how all the data is structured and interconnected. If desired, you can re-organize your data around understandable business objects such as people, transactions, events, or anything else.&nbsp; This abstraction layer enables you to operate at the level of data sets, makes it practical to integrate and analyze vast amounts of data, and enables you to find matching patterns. The DataWalk knowledge graph manages data in a property graph model to enable data compression benefits, while also incorporating certain elements such as objects and links from triple store concepts.",
            points:[
               "Graphical interface visualizes interconnected data clearly",
               "Easily reorganize data around key business entities",
               "Leverages property graph and triple-store features"
            ],
            footer:"Enables scalable, intuitive analysis through graph abstraction"
        },
        {
            title:"DataSearch Flexible data represenation",
            description:"DataWalk utilizes a logical data structure that is presented on the Universe Viewer and is easily modified on the fly. There is no need to make changes to the physical model or disturb system operation to change this structure. The DataWalk structure is highly standardized, with data evenly distributed across many compute nodes to rapidly obtain answers. With DataWalk the cost of changing the logical structure is so low (and easy) that you can experiment with the logical model and freely modify it in real time. For example, you can easily create new connections, edit existing ones, or add new sources and object descriptions.",
            points:[
                "Instantly modify data structures without interrupting operations",
                "Logical model changes require no physical schema updates",
                "Encourages experimentation and quick adaptation"
            ],
            footer:"Empowers real-time structural changes with minimal cost"
        },
        {
            title:"Optimized For Complex Querying",
            description:"The Universe Viewer allows you to directly perform ad-hoc, no-code complex queries via an intuitive visual interface, such that neither technical expertise or programming skills are required. Queries are created in an iterative manner, and visualized in “breadcrumbs” such that you can clearly understand each step of a complex query and be assured that results will be reliable. Patented DataWalk technology ensures that complex queries complete, and will complete quickly. As shown in Figure 3 below, DataWalk has published benchmark results showing that unlike traditional relational database systems, which fail to generate a result after a relatively small number of joins, DataWalk maintains linear response time through the equivalent of 600 joins.",
            points:[
                "Perform no-code queries with a visual interface",
                "Understand complex queries via breadcrumb-style steps"
            ],
            footer:"Handles hundreds of joins with linear performance"

        },
        {
            title:"Fast Execution of Graph Algorithm",
            description:"DataSearch graph-oriented technology is enhanced with ultrafast state usage, which enables exceptional performance for graph algorithms. Benchmark results have validated DataWalk’s superior performance relative to the fastest graph databases.",
            points:[
                "High-speed state handling for algorithm optimization",
                "Benchmark-proven performance across graph workloads"
            ],
            footer:"Delivers best-in-class performance for graph-based analysis"
        },
        {
            title:"The DataSearch App Center",
            description:"The DataSearch App Center enables programs or subroutines to run inside the DataWalk environment, although they are not part of the DataWalk code base. Apps can utilize DataWalk data and analyses, but run in a separate execution space such that an App cannot impact the reliability of the core DataWalk application. Apps can be generated by DataWalk as well as by certified partners and customers, for functions including integrations, features, machine learning models, or additional full-scale applications. The App Center also enables open-source libraries to be integrated into DataWalk, thus dramatically expanding the potential scope of system functionality. The App Center includes a graphical user interface, and Apps can also be initiated via the DataWalk API (loosely analogous to AWS Lambda).",
            points:[
                "Run apps independently to avoid core system impact",
                "Integrate open-source libraries for advanced capabilities"
            ],
            footer:"Expands platform functionality through secure app integration"
        },
        {
            title:"The DataSearch App Center",
            description:"The DataWalk App Center enables programs or subroutines to run inside the DataWalk environment, although they are not part of the DataWalk code base. Apps can utilize DataWalk data and analyses, but run in a separate execution space such that an App cannot impact the reliability of the core DataWalk application. Apps can be generated by DataWalk as well as by certified partners and customers, for functions including integrations, features, machine learning models, or additional full-scale applications. The App Center also enables open-source libraries to be integrated into DataWalk, thus dramatically expanding the potential scope of system functionality. The App Center includes a graphical user interface, and Apps can also be initiated via the DataWalk API (loosely analogous to AWS Lambda).",
            points:[
                "REST-based services for internal and external access",
                "Easily integrates with enterprise data platforms",
                "Enables system-to-system data and insights exchange"
            ],
            footer:"Provides seamless communication between systems and services"
        },
        {
            title:"DataSearch uses permission and access control",
            description:"A major challenge with analysis of sensitive data is guaranteeing that data and the results of system processing are consistent with user privileges. DataWalk explicitly addresses this challenge with three levels of privileges that support granular permissions while maintaining exceptional performance: access to sets of objects per user, access to an attribute of an object per user, and access to an object using access filters per user. The system administrator defines access filters, per dataset, for a given user or group of users. The filters are applied transparently each time the system is queried by the user. The added value of filters is supported by the following features. First, the access rights are not demanding; they are processed by the system while performing a query - not after the query has been processed - which increases efficiency. Second, the access rights are manageable and do not significantly affect system efficiency. ",
            points:[
             "Granular access control for objects, attributes, and queries",
             "Privileges applied during query execution for performance"
            ],
            footer:"Transparent filtering based on user roles"
        },
        {
            title:"DataSearch Optimized for vast amount of data",
            description:"The DataWalk search facility is optimized to meet the challenge of providing useful results when searching vast amounts of data. DataWalk supports a targeted search facility that enables you to configure the specific fields you want to search – across any of your desired data sets - for any type of entity, delivering results that are far more precise.",
            points:[
                "Targeted search across large datasets",
                "Configurable fields for precise, entity-specific searches",
                "Maintains performance at scale"
            ],
            footer:""
        }
];
  const FeatureSection = ({ title, description, points, footer }) => {
    return (
      <div className="feature-section">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <ul>
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        {footer && <p className="footer">{footer}</p>}
      </div>
    );
  };
    return(
        <div className="technology">
            <section className="hero-section">
              <div className="hero-container">
                <div className="hero-text">
                  <h1>DataSearch Technology</h1>
                  <p>
                   DataSearch has developed hybrid graph/relational technology to enable quick data integration and fast analysis of vast amounts of complex data
                  </p>
                  <button className="cta-button">Watch Intro video</button>
                </div>
              </div>
            </section>
            <section className="technology-page">
            {sectionsData.map((section, index) => (
        <FeatureSection
          key={index}
          title={section.title}
          description={section.description}
          points={section.points}
          footer={section.footer}
        />
  ))}
</section>
</div>
    )
}
export default Technology;