import Experience from './Experience';

/**
 * Playing around with passing props down
 */
export default function ExperienceList() {
  return (
    <>
      <h2 className="text-3xl my-10">Work Experience</h2>
      <ul className="flex flex-col space-y-0 text-myblue-100">
        <Experience 
          employer="Johns Hopkins University Sheridan Libraries"
          jobTitle="Software Engineer"
          timeline="2014 - present"
          tech="EmberJS, Yarn, Javascript, Elasticsearch, REST, Java, RDF, JSON-LD, Docker, Apache Tomcat"
          logo="/images/jh_logo.png"
        >
          <ul className="list-disc">
            <li><strong>More to be added</strong></li>
            <li>
              Worked with a junior front end developer and a senior backend developer as well as developers from 
              our external partner to decide on API specifications and data formats
            </li>
            <li>Create custom plugins using React for the Mirador viewer - a IIIF viewer</li>
            <li>Developed Java servlet to transform archive data into the IIIF standard</li>
            <li>
              Created command line utilities for importing and managing data, as well as validating scholarly 
              generated XML data
            </li>
            <li>
              Communicated regularly with another developer and several non-technical team members to report progress
              and develop requirements
            </li>
            <li>Implemented custom features in the IIIF viewer jQuery application</li>
            <li>Developed a custom full text search service using Apache Lucene</li>
            <li>Wrote developer focused documentation in markdown</li>
            <li>Utilized git and GitHub for version control</li>
          </ul>
        </Experience>
        <Experience
          employer="Laureate Education"
          jobTitle="Java Developer"
          timeline="Nov 2013 - July 2014"
          tech="Java, GWT, Spring"
          logo="/images/Laureate_logo_crop.png"
        >
          <ul className="list-disc">
            <li>Leveraged REST and SOAP based web services to create web applications</li>
            <li>Implemented a SAML based single sign-on with Google services to enhance an existing web application</li>
            <li>
              <span className="italic pl-4">&lt;Past tense verb and something(s) you did&gt;</span> to maintain an existing
              complex GWT web application
            </li>
            <li>Collaborated efficiently on a&nbsp;
              <span className="italic pl-4">&lt;X&gt;</span> person team to handle a wide-range of technical responsibilities</li>
            <li>Integrated a third-party payment system into a Spring MVC web application to introduce online payment capabilities</li>
          </ul>
        </Experience>
        <Experience
          employer="Johns Hopkins University Sheridan Libraries"
          jobTitle="Software Developer"
          timeline="Feb 2013 - Oct 2013"
          tech="Java, GWT, Apache Tomcat, JSON-LD, RDF"
          logo="/images/jh_logo.png"
        >
          <ul className="list-disc">
            <li>Developed a GWT web application to demonstrate features of the Shared Canvas standard</li>
            <li>Used the Model-View-Controller design pattern to build web applications</li>
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
          logo="/images/UMD_logo.jpg"
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
          logo="/images/ANL_logo_crop.png"
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