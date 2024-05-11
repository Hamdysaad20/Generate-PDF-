// variables
let root24Ele = document.getElementById("root24");
let section24Ele = document.createElement("section")
let container24Ele = document.createElement("div")
let sectionWrapper24Ele = document.createElement("div")
let Header24Ele = document.createElement("header");
let content24Ele = document.createElement("div")
let Environmental24Ele = document.createElement("div")
let Social24Ele = document.createElement("div")

// Add Classes
container24Ele.classList.add("container");
sectionWrapper24Ele.classList.add("sectionWrapper");
Header24Ele.classList.add("header");
content24Ele.classList.add("content24");
Environmental24Ele.classList.add("Environmental24");
Social24Ele.classList.add("Social24");



Header24Ele.innerHTML = `
<div class="headerWrapper">
    <div class="headerItem">
        <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
    </div>
    <div class="headerItem">Annex</div>
    <div class="headerItem headerItemRight">
        <p>LevelUp ESG</p>
        <p>|</p>
        <p class="AssessmentContent">Sustainability Maturity
        <br/>Assessment </p>
    </div>
</div>
`
// inner html
content24Ele.innerHTML = `
    <div class="gridComponent24">
        <div class="one24">ESG Components</div>
        <div class="three24">Energy  Consumption  and GHG emissions </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Resources Managment, Circularity  and Waste Reduction </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Water Management</div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Sustainability Impact Assement  </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Net Zero emissions target  </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Diversity, Equity and Inclusion</div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Employee Relations and Talent  Management </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Workplace Health and Safety </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Value Chain Workers and Community Engagement  </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

    </div>
`
Environmental24Ele.innerHTML = "Environmental"
Social24Ele.innerHTML ="Social"

  // AppendChild
  document.body.appendChild(section24Ele)
  section24Ele.appendChild(container24Ele)
  container24Ele.appendChild(Header24Ele)
  container24Ele.appendChild(sectionWrapper24Ele)
  sectionWrapper24Ele.appendChild(content24Ele)
  content24Ele.appendChild(Environmental24Ele)
  content24Ele.appendChild(Social24Ele)