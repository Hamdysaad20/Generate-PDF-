// variables
let root10Ele = document.getElementById("root10");
let section10Ele = document.createElement("section")
let container10Ele = document.createElement("div")
let sectionWrapper10Ele = document.createElement("div")
let logo10Ele = document.createElement("div")
let logo_img10Ele = document.createElement("img")
let content10Ele = document.createElement("div")
let content_company10Ele = document.createElement("div")
let SWOTContainer10Ele = document.createElement("div")
let cardsContainer10Ele = document.createElement("div")
let position10Ele = document.createElement("div")


// Add Classes
container10Ele.classList.add("container");
sectionWrapper10Ele.classList.add("sectionWrapper");
logo10Ele.classList.add("logo");
logo_img10Ele.classList.add("logo_image");
content10Ele.classList.add("content");
content_company10Ele.classList.add("content_company10");
SWOTContainer10Ele.classList.add("SWOTContainer10");
cardsContainer10Ele.classList.add("cardsContainer10");
position10Ele.classList.add("position10");

 // set Attribute
 logo_img10Ele.setAttribute("src", "/static/images/logo.png");
 logo_img10Ele.setAttribute("alt", "logo");

 // inner Html
content_company10Ele.innerHTML = "Environmental SWOT";
position10Ele.innerHTML = `
    <span>S</span>
    <span>W</span>
    <span>O</span>
    <span>T</span>
`;
cardsContainer10Ele.innerHTML = `
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
  document.body.appendChild(section10Ele)
  section10Ele.appendChild(container10Ele)
  container10Ele.appendChild(sectionWrapper10Ele)
  sectionWrapper10Ele.appendChild(logo10Ele)
  logo10Ele.appendChild(logo_img10Ele)
  sectionWrapper10Ele.appendChild(content10Ele)
  content10Ele.appendChild(content_company10Ele)
  content10Ele.appendChild(SWOTContainer10Ele)
  SWOTContainer10Ele.appendChild(cardsContainer10Ele)
  SWOTContainer10Ele.appendChild(position10Ele)