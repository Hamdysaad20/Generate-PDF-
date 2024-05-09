// variables
let root12Ele = document.getElementById("root12");
let section12Ele = document.createElement("section")
let container12Ele = document.createElement("div")
let sectionWrapper12Ele = document.createElement("div")
let Header12Ele = document.createElement("header");
let content12Ele = document.createElement("div")
let content_company12Ele = document.createElement("div")
let SWOTContainer12Ele = document.createElement("div")
let cardsContainer12Ele = document.createElement("div")
let position12Ele = document.createElement("div")


// Add Classes
container12Ele.classList.add("container");
sectionWrapper12Ele.classList.add("sectionWrapper");
Header12Ele.classList.add("header");
content12Ele.classList.add("content");
content_company12Ele.classList.add("content_company10");
SWOTContainer12Ele.classList.add("SWOTContainer10");
cardsContainer12Ele.classList.add("cardsContainer10");
position12Ele.classList.add("position10");



 // inner Html
 Header12Ele.innerHTML = `
<div class="headerWrapper">
    <div class="headerItem">
        <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
    </div>
    <div class="headerItem">SWOT Analysis</div>
    <div class="headerItem headerItemRight">
        <p>LevelUp ESG</p>
        <p>|</p>
        <p class="AssessmentContent">Sustainability Maturity
        <br/>Assessment </p>
    </div>
</div>
`
content_company12Ele.innerHTML = "Governance SWOT ";
position12Ele.innerHTML = `
    <span>S</span>
    <span>W</span>
    <span>O</span>
    <span>T</span>
`;
cardsContainer12Ele.innerHTML = `
    <div class="card">
        <p>Strengths</p>
        <div >
            <div class="numbersCard">01</div>
            <div class="numbersCard">02</div>
            <div class="numbersCard">03</div>
        </div>
    </div>
    <div class="card">
        <p>Weaknesses</p>
        <div >
            <div class="numbersCard">01</div>
            <div class="numbersCard">02</div>
            <div class="numbersCard">03</div>
        </div>
    </div>
    <div class="card">
        <p>Opportunities</p>
        <div >
            <div class="numbersCard">01</div>
            <div class="numbersCard">02</div>
            <div class="numbersCard">03</div>
        </div>
    </div>
    <div class="card">
        <p>Possible Threats</p>
        <div >
            <div class="numbersCard">01</div>
            <div class="numbersCard">02</div>
            <div class="numbersCard">03</div>
        </div>
    </div>
`


  // AppendChild
  document.body.appendChild(section12Ele)
  section12Ele.appendChild(container12Ele)
  container12Ele.appendChild(Header12Ele)
  container12Ele.appendChild(sectionWrapper12Ele)
  sectionWrapper12Ele.appendChild(content12Ele)
  content12Ele.appendChild(content_company12Ele)
  content12Ele.appendChild(SWOTContainer12Ele)
  SWOTContainer12Ele.appendChild(cardsContainer12Ele)
  SWOTContainer12Ele.appendChild(position12Ele)