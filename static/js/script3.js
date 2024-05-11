// variables
let root3Ele = document.getElementById("root3");
let section3Ele = document.createElement("section")
let container3Ele = document.createElement("div")
let sectionWrapper3Ele = document.createElement("div")
let Header3Ele = document.createElement("header");
let content3Ele = document.createElement("div")
let content_company3Ele = document.createElement("div")
let AssessmentContainer3Ele = document.createElement("div")

// Add Classes
container3Ele.classList.add("container");
sectionWrapper3Ele.classList.add("sectionWrapper");
Header3Ele.classList.add("header");
content3Ele.classList.add("content");
content_company3Ele.classList.add("content_company10");
AssessmentContainer3Ele.classList.add("AssessmentContainer3");




  // inner Html
  Header3Ele.innerHTML = `
    <div class="headerWrapper">
        <div class="headerItem">
            <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
        </div>
        <div class="headerItem">Introduction</div>
        <div class="headerItem headerItemRight">
            <p>LevelUp ESG</p>
            <p>|</p>
            <p class="AssessmentContent">Sustainability Maturity
            <br/>Assessment </p>
        </div>
    </div>
`
content_company3Ele.innerHTML = "Introduction ";
AssessmentContainer3Ele.innerHTML = `
  <h1 class="Title3">ESG Maturity Assessment</h1>
  <p class="desc3">The ever-evolving sustainability landscape mandates compliance with a multitude of practices, standards, and frameworks, impacting organisations of all sizes.</p>
  <div class="AssessmentCards">
    <div class="CardItem3">
        <h3>Why Organisations need to
        Assess Their Maturity?</h3>
        <p class="descCardItem">
            This tool serves as a catalyst for
            executive leaders and businesses,
            enabling companies to make well-
            informed decisions, align their
            strategies with sustainability goals,
            and drive positive change within their
            organizations and communities.
        </p>
    </div>


    <div class="CardItem3">
        <h3>Key Benefits of Performing
        Maturity Assessment</h3>
        <p class="descCardItem">
            We're thrilled to offer cutting-edge
            diagnostic tools for organizations
            committed to advancing sustainability.
            Excelling in reporting is now both
            essential and demanding. Our platform
            enables and equips you with laser-
            focused insights, dynamic monitoring
            capabilities, and efficient performance
            measures, empowering you to Level Up
            your sustainability journey!
        </p>
    </div>


    <div class="CardItem3">
        <h3>How can this tool help?</h3>
        <p class="descCardItem">
            This assessment is designed to empower
            you to understand your current position
            in sustainability matters, identify specific
            areas for targeted improvement, and
            focus on strategic enhancements. By
            performing a maturity assessment for
            sustainability, you can develop a
            roadmap for progress with clarity and
            direction, ultimately driving meaningful
            change within your organisation and the
            broader community and planet.
        </p>

        </div>
    <div class="CardItem3">
        <img src="/static/images/tree.png" alt="tree" class="CardImage3"/>
        <div class="DataTree3">
            <div class="DataTreeBox DataTreeBoxOne">Improved Efficiencies and Compliance</div>
            <div class="DataTreeBox DataTreeBoxTwo">ncreased Stakeholder Trust and Reputation</div>
            <div class="DataTreeBox DataTreeBoxThree">Global Leading Practice Alignment</div>
            <div class="DataTreeBox DataTreeBoxFour">Harnessing Strengths and Addressing Opportunities</div>
            <div class="DataTreeBox DataTreeBoxFive">Targeted Assessment and Roadmap</div>
            <div class="DataTreeBox DataTreeBoxSix">Paving the Way for a Sustainable Future</div>
        </div>
    </div>
 </div>
 <h4>Alignment to globally accepted standards and framework</h4>
 <div class="standard3">
    <img src="/static/images/GRI.png" class="logoStandard3" alt="logo"/>
    <img src="/static/images/IFRS (1).png" class="logoStandard3" alt="logo"/>
    <img src="/static/images/SASB (1).png" class="logoStandard3" alt="logo"/>
    <img src="/static/images/CSRD(1).png" class="logoStandard3" alt="logo"/>
 </div>
`;


 // AppendChild
 document.body.appendChild(section3Ele)
 section3Ele.appendChild(container3Ele)
 container3Ele.appendChild(Header3Ele)
 container3Ele.appendChild(sectionWrapper3Ele)
 sectionWrapper3Ele.appendChild(content3Ele)
 content3Ele.appendChild(content_company3Ele)
 content3Ele.appendChild(AssessmentContainer3Ele)