// variables
let root5Ele = document.getElementById("root5");
let section5Ele = document.createElement("section")
let container5Ele = document.createElement("div")
let sectionWrapper5Ele = document.createElement("div")
let Header5Ele = document.createElement("header");
let content5Ele = document.createElement("div")
let content_company5Ele = document.createElement("div")
let content_Page5Ele = document.createElement("div")

// Add Classes
container5Ele.classList.add("container");
sectionWrapper5Ele.classList.add("sectionWrapper");
Header5Ele.classList.add("header");
content5Ele.classList.add("content");
content_company5Ele.classList.add("content_company");
content_Page5Ele.classList.add("content_Page5");



 // inner Html
 Header5Ele.innerHTML = `
 <div class="headerWrapper">
     <div class="headerItem">
         <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
     </div>
     <div class="headerItem">ESG Components</div>
     <div class="headerItem headerItemRight">
         <p>LevelUp ESG</p>
         <p>|</p>
         <p class="AssessmentContent">Sustainability Maturity
         <br/>Assessment </p>
     </div>
 </div>
`
content_company5Ele.innerHTML = "ESG Components";
content_Page5Ele.innerHTML = `
    <div class="ContentDesc5">
        <p>The ESG components of this assessment is
            designed to assess the main aspects of your
            corporate sustainability practices. As a result,
            this section is categorised into several key labels
            to ensure a complete coverage of the most
            relevant topics. 
        </p>
        <p>
            Thus, in the Environmental category "E"
            are determined in 5 different sections, the
            Social category "S" in 4 and the
            Governance category "G" in 5 as shows
            the infographic. 
        </p>
    </div>
    <div class="containerImage5">
        <img src="/static/images/spider_chart.png" alt="ESG image" class="ESGimg5"/>
    </div>
    <p>By highlighting the interconnectedness of environmental, social, and governance factors, it
    showcases how embracing circular practices positively impacts sustainability initiatives within
    your organisation. You can discover detailed descriptions of each section within the annex.</p>
`


  // AppendChild
  document.body.appendChild(section5Ele)
  section5Ele.appendChild(container5Ele)
  container5Ele.appendChild(Header5Ele)
  container5Ele.appendChild(sectionWrapper5Ele)
  sectionWrapper5Ele.appendChild(content5Ele)
  content5Ele.appendChild(content_company5Ele)
  content5Ele.appendChild(content_Page5Ele)