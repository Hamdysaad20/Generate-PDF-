// variables
let root11Ele = document.getElementById("root11");
let section11Ele = document.createElement("section")
let container11Ele = document.createElement("div")
let sectionWrapper11Ele = document.createElement("div")
let logo11Ele = document.createElement("div")
let logo_img11Ele = document.createElement("img")
let content11Ele = document.createElement("div")
let content_company11Ele = document.createElement("div")
let SWOTContainer11Ele = document.createElement("div")
let cardsContainer11Ele = document.createElement("div")
let position11Ele = document.createElement("div")


// Add Classes
container11Ele.classList.add("container");
sectionWrapper11Ele.classList.add("sectionWrapper");
logo11Ele.classList.add("logo");
logo_img11Ele.classList.add("logo_image");
content11Ele.classList.add("content");
content_company11Ele.classList.add("content_company10");
SWOTContainer11Ele.classList.add("SWOTContainer10");
cardsContainer11Ele.classList.add("cardsContainer10");
position11Ele.classList.add("position10");

 // set Attribute
 logo_img11Ele.setAttribute("src", "/static/images/logo.png");
 logo_img11Ele.setAttribute("alt", "logo");

 // inner Html
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
  container11Ele.appendChild(sectionWrapper11Ele)
  sectionWrapper11Ele.appendChild(logo11Ele)
  logo11Ele.appendChild(logo_img11Ele)
  sectionWrapper11Ele.appendChild(content11Ele)
  content11Ele.appendChild(content_company11Ele)
  content11Ele.appendChild(SWOTContainer11Ele)
  SWOTContainer11Ele.appendChild(cardsContainer11Ele)
  SWOTContainer11Ele.appendChild(position11Ele)