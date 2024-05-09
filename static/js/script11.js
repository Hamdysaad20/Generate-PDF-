// variables
let root11Ele = document.getElementById("root11");
let section11Ele = document.createElement("section")
let container11Ele = document.createElement("div")
let sectionWrapper11Ele = document.createElement("div")
let Header11Ele = document.createElement("header");
let content11Ele = document.createElement("div")
let content_company11Ele = document.createElement("div")
let SWOTContainer11Ele = document.createElement("div")
let cardsContainer11Ele = document.createElement("div")
let position11Ele = document.createElement("div")


// Add Classes
container11Ele.classList.add("container");
sectionWrapper11Ele.classList.add("sectionWrapper");
Header11Ele.classList.add("header");
content11Ele.classList.add("content");
content_company11Ele.classList.add("content_company10");
SWOTContainer11Ele.classList.add("SWOTContainer10");
cardsContainer11Ele.classList.add("cardsContainer10");
position11Ele.classList.add("position10");




 // inner Html
 Header11Ele.innerHTML = `
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
content_company11Ele.innerHTML = "Social SWOT";
position11Ele.innerHTML = `
    <span>S</span>
    <span>W</span>
    <span>O</span>
    <span>T</span>
`;
cardsContainer11Ele.innerHTML = `
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
  document.body.appendChild(section11Ele)
  section11Ele.appendChild(container11Ele)
  container11Ele.appendChild(Header11Ele)
  container11Ele.appendChild(sectionWrapper11Ele)
  sectionWrapper11Ele.appendChild(content11Ele)
  content11Ele.appendChild(content_company11Ele)
  content11Ele.appendChild(SWOTContainer11Ele)
  SWOTContainer11Ele.appendChild(cardsContainer11Ele)
  SWOTContainer11Ele.appendChild(position11Ele)