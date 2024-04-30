// variables
let root1Ele = document.getElementById("root1");
let section1Ele = document.createElement("section")
let container1Ele = document.createElement("div")
let sectionWrapper1Ele = document.createElement("div")
let logo1Ele = document.createElement("div")
let logo_img1Ele = document.createElement("img")
let content1Ele = document.createElement("div")


// Add Classes
section1Ele.classList.add("Home");
container1Ele.classList.add("container");
sectionWrapper1Ele.classList.add("sectionWrapper");
logo1Ele.classList.add("logo");
logo_img1Ele.classList.add("logo_image");
content1Ele.classList.add("content");


 // set Attribute
 logo_img1Ele.setAttribute("src", "/static/images/logo.png");
 logo_img1Ele.setAttribute("alt", "logo");

//  inner html
content1Ele.innerHTML = `
    <div class="contentHome">
        <h1 class="homeTitle1">ESG</h1>
        <p class="homeDesc1">Sustainability Maturity Assessment</p>
        <span>28</span>
        <span>April</span>
        <span>2024</span> 
    </div>
    <div class="footerHome">
        <p>LevelUp ESG</p> 
        <p>|</p> 
        <div class="MaturityFooter1">
            <div>Sustainability</div>
            <div>Maturity Assessment</div>
        </div>
       
    </div>
`

  // AppendChild
document.body.appendChild(section1Ele)
section1Ele.appendChild(container1Ele)
container1Ele.appendChild(sectionWrapper1Ele)
sectionWrapper1Ele.appendChild(logo1Ele)
logo1Ele.appendChild(logo_img1Ele)
sectionWrapper1Ele.appendChild(content1Ele)