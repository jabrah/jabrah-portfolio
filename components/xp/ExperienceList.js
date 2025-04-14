import Experience from './Experience';

/**
 * Playing around with passing props down
 */
export default function ExperienceList() {
  return (
    <>
      <ul className="flex flex-col space-y-0 text-myblue-100">
        <Experience 
          employer="Johns Hopkins University Sheridan Libraries"
          jobTitle="Software Engineer"
          timeline="2014 - present"
          tech="EmberJS, Yarn, Javascript, Elasticsearch, REST, Java, RDF, JSON-LD, Docker, Apache Tomcat"
          logo="./images/jh_logo.png"
        >
          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              Library institutional repository and digital collections repository selection
            </h3>
            <ul className="list-disc ml-4">
              <li>Technical lead for analysis and eventual selection of repository platforms</li>
              <li>Coordinate the technical team to provide technical oriented analysis of several repository platforms to 
              explore the technical feasibility for each</li>
              <li>Participate in user stakeholder group to determine requirements and analyse platforms against those 
              requirements</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              <a href="https://www.lifexcode.org/k4bl" target="_blank">Keywords for Black Louisiana</a>
            </h3>
            <div>
              <span className="italic">Technology: </span>
              Jekyll, Liquid template, Ruby, Javascript, HTML
            </div>
            <ul className="list-disc ml-4">
              <li>
                Successfully launch two sites to show research on&nbsp;
                <a href="https://docs.k4bl.org/">documents</a> and the&nbsp;
                <a href="">stories</a> they contain
              </li>
              <li>Creating and customizing markdown and Liquid templates to fit project needs </li>
              <li>Customize Jekyll-based template sites: Wax and CollectionBuilder</li>
              <li>Build requirements for the web sites and gather feedback from project researchers</li>
              <li>Offer guidance to project staff in areas such as web site update planning, long term storage needs, 
              project metadata structure</li>
              <li>Help maintain continuity across project staffing changes and help prepare for project ownership change at 
              the end of the project</li>
              <li>Write documentation and instruction for technical topics needed by project staff such as the use of git and 
              GitHub for the project's web site development</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              IIIF support in JScholarship
            </h3>
            <div>
              <span className="italic">Technology: </span>
              DSpace, Java, Angular, IIIF, Cantaloupe image server
            </div>
            <ul className="list-disc ml-4">
              <li>Set and test DSpace configuration to enable IIIF support</li>
              <li>Determine short term workaround and long term support plan</li>
              <li>Work with the DSpace community on long term support of custom IIIF manifest files</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              Upgrade JScholarship, DSpace version 6.x to 7.6
            </h3>
            <div>
              <span className="italic">Technology: </span>
              DSpace, Angular, Javascript, Docker
            </div>
            <ul className="list-disc ml-4">
              <li>Created custom DSpace theme for JScholarship</li>
              <li>Helped establish and debug UI update and deployment scripts</li>
              <li>Debugged DSpace configuration for searching and media viewing</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              <a href="https://pass.jhu.edu/" target="_blank">Public Access Submission System (PASS)</a>
            </h3>
            <div>
              <span className="italic">Technology: </span>
              Ember, Javascript, Java, GitHub Actions
            </div>
            <ul className="list-disc ml-4">
              <li>Became the solo UI developer to shepherd the early prototype UI codebase through the initial launch</li>
              <li>
                Updated the PASS UI to new major versions of the Ember framework with another UI developer. 
                This involved several aspects from refactoring UI components, updating the UI build tooling, 
                to changing the UI testing harness
              </li>
              <li>
                Refactored the PASS UI to communicate with backend APIs that were refactored to follow JSON:API 
                specifications
              </li>
              <li>
                Created the initial PASS projects' build and release automations using GitHub Actions based on 
                analysis of the earlier manual release process
              </li>
              <li>Performed several application releases</li>
              <li>Reviewed code changes and pull requests</li>
              <li>
                Provided task breakdowns, time estimates, and initial design documentation for UI changes and 
                features for project manager
              </li>
              <li>Reviewed project documentation to provide historic context for some design decisions</li>
              <li>Created the initial end to end testing system with another developer</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              Islandorta for Digital Collections (IDC) at JHU
            </h3>
            <div>
              <span className="italic">Technology: </span>
              Drupal, PHP, Javascript, Docker
            </div>
            <ul className="list-disc ml-4">
              <li>Designed and implemented advanced search UI</li>
              <li>
                Analyzed use cases with project manager for UI feasibility, including providing task breakdowns 
                and time estimates
              </li>
              <li>Configured aspects of Drupal to support UI use cases</li>
              <li>Created initial site theme using a headless Drupal and custom Javascript frontend</li>
              <li>Ensured sufficient IIIF support in Drupal</li>
              <li>Worked with the Library Applications Group during a transition from development to support</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              Annotation Interoperability
            </h3>
            <div>
              <span className="italic">Technology: </span>
              React, Javascript, IIIF, Java
            </div>
            <ul className="list-disc ml-4">
              <li>Provided development and feedback on backend APIs for interacting with target external systems</li>
              <li>
                Developed a Mirador plugin for simultaneous viewing of annotations from internal and external 
                sources on the same item
              </li>
              <li>Provided UI development guidance for a junior developer</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              <a href="https://dlmm.library.jhu.edu/viewer" target="_blank">Digital Library of Medieval Manuscripts (DLMM)</a>
            </h3>
            <div>
              <span className="italic">Technology: </span>
              jQuery, Javascript, Java, IIIF
            </div>
            <ul className="list-disc ml-4">
              <li>Created new viewing environment for the Roman de la Rose and Christine de Pizan collections using IIIF</li>
              <li>Demonstrate developments with stakeholders and respond to feedback</li>
              <li>
                Supported another developer in developing a backend solution to dynamically generate IIIF manifests 
                from original data
              </li>
              <li>Wrote tools to import data into the data archive</li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              <a href="https://archaeologyofreading.org/" target="_blank">Arcaeology of Reading</a>
            </h3>
            <div>
              <span className="italic">Technology: </span>
              jQuery, Javascript, Java, IIIF
            </div>
            <ul className="list-disc ml-4">
              <li>Heavily customized a Mirador 2 viewer to meet faculty requirements</li>
              <li>
                Communicated regularly with technical and non-technical team members to develop requirements 
                and report progress
              </li>
              <li>Participated in backend development</li>
              <li>
                Helped create the data model to keep the project data representing handwritten annotations in the 
                margins of select early printed books
              </li>
            </ul>
          </div>

          <div className="project">
            <h3>
              <span className="italic">Project: </span>
              Bible Historiale
            </h3>
            <div>
              <span className="italic">Technology: </span>
              Java, GWT, Solr
            </div>
            <ul className="list-disc ml-4">
              <li>Created a custom faceted search interface</li>
              <li>Indexed highly custom XML data with Solr</li>
            </ul>
          </div>
        </Experience>
        <Experience
          employer="Laureate Education"
          jobTitle="Java Developer"
          timeline="Nov 2013 - July 2014"
          tech="Java, GWT, Spring"
          logo="./images/Laureate_logo_crop.png"
        >
          <ul className="list-disc">
            <li>Leveraged REST and SOAP based web services to create web applications</li>
            <li>Implemented a SAML based single sign-on with Google services to enhance an existing web application</li>
            <li>Enhanced and maintained an existing complex GWT web application</li>
            <li>Communicated regularly with other development teams for different aspects of application development 
            such as database management, middleware, and release management</li>
            <li>Added payment capabilities to a Spring MVC based web application by integrating a third party payment 
            system</li>
          </ul>
        </Experience>
        <Experience
          employer="Johns Hopkins University Sheridan Libraries"
          jobTitle="Software Developer"
          timeline="Feb 2013 - Oct 2013"
          tech="Java, GWT, Apache Tomcat, JSON-LD, RDF"
          logo="./images/jh_logo.png"
        >
          <ul className="list-disc">
            <li>Developed a GWT web application to demonstrate features of the Shared Canvas standard</li>
            <li>Created a service to serialize Shared Canvas data to JSON-LD or other commonly used RDF data formats</li>
            <li>Generated Shared Canvas test data as RDF and exposed it with a Java servlet</li>
            <li>
              Utilized the HTML5 canvas element to create a dynamic image viewer, which allows tiling of very large images, zooming
              and panning, and the display of annotations
            </li>
            <li>Implemented a full-text search service using Apache Solr</li>
          </ul>
        </Experience>
        <Experience
          employer="University of Maryland"
          jobTitle="Research Assistant"
          timeline="Feb 2010 - Nov 2012"
          logo="./images/UMD_logo.jpg"
        >
          <ul className="list-disc">
            <li>Developed UI for analyzing data from specialized electromagnetic experiments that allowed researchers to transform and output data in various formats</li>
            <li>Programmed scripts in MATLAB to aid data analysis and data collection while conducting research</li>
            <li>Conducted numerical simulations and data analysis for multiple experiments simultaneously</li>
            <li>Provided documentation and support to scientists running data analysis scripts or numerical simulations</li>
          </ul>
        </Experience>
        <Experience
          employer="Argonne National Laboratory"
          jobTitle="Intern"
          timeline="June 2010 - Aug 2010"
          logo="./images/ANL_logo_crop.png"
        >
          <ul className="list-disc">
            <li>Developed C++ program for hardware control and data acquisition to let scientists characterize lasers according to their beam profiles</li>
            <li>Preprocess data from the data acquisition software to be used in other data analysis tools</li>
            <li>Communicate results regularly with physicists to iteratively improve data collection and analysis</li>
          </ul>
        </Experience>
      </ul>
    </>
  );
};