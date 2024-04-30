// variables
let root3Ele = document.getElementById("root3");
let section3Ele = document.createElement("section")
let container3Ele = document.createElement("div")
let sectionWrapper3Ele = document.createElement("div")
let logo3Ele = document.createElement("div")
let logo_img3Ele = document.createElement("img")
let content3Ele = document.createElement("div")
let content_company3Ele = document.createElement("div")
let AssessmentContainer3Ele = document.createElement("div")

// Add Classes
container3Ele.classList.add("container");
sectionWrapper3Ele.classList.add("sectionWrapper");
logo3Ele.classList.add("logo");
logo_img3Ele.classList.add("logo_image");
content3Ele.classList.add("content");
content_company3Ele.classList.add("content_company10");
AssessmentContainer3Ele.classList.add("AssessmentContainer3");


 // set Attribute
 logo_img3Ele.setAttribute("src", "/static/images/logo.png");
 logo_img3Ele.setAttribute("alt", "logo");

  // inner Html
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
        <img src="/static/images/spider_chart.png" alt="tree" class="CardImage3"/>
    </div>
 </div>
 <h4>Alignment to globally accepted standards and framework</h4>
 <div class="standard3">
    <img src="/static/images/logo.png" class="logoStandard3" alt="logo"/>
    <img src="/static/images/logo.png" class="logoStandard3" alt="logo"/>
    <img src="/static/images/logo.png" class="logoStandard3" alt="logo"/>
    <img src="/static/images/logo.png" class="logoStandard3" alt="logo"/>
 </div>
`;


 // AppendChild
 document.body.appendChild(section3Ele)
 section3Ele.appendChild(container3Ele)
 container3Ele.appendChild(sectionWrapper3Ele)
 sectionWrapper3Ele.appendChild(logo3Ele)
 logo3Ele.appendChild(logo_img3Ele)
 sectionWrapper3Ele.appendChild(content3Ele)
 content3Ele.appendChild(content_company3Ele)
 content3Ele.appendChild(AssessmentContainer3Ele)