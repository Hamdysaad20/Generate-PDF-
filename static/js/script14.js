// variables
let root14Ele = document.getElementById("root14");
let section14Ele = document.createElement("section")
let container14Ele = document.createElement("div")
let sectionWrapper14Ele = document.createElement("div")
let Header14Ele = document.createElement("header");
let content14Ele = document.createElement("div")
let content_company14Ele = document.createElement("div")
let paragraphs14Ele = document.createElement("div")
let contentContainer14Ele = document.createElement("div")
let solution14Ele = document.createElement("div")
let seize14Ele = document.createElement("h4")
let impactBtn14Ele = document.createElement("div")

// Add Classes
container14Ele.classList.add("container");
sectionWrapper14Ele.classList.add("sectionWrapper");
Header14Ele.classList.add("header");
content14Ele.classList.add("content");
content_company14Ele.classList.add("content_company");
contentContainer14Ele.classList.add("contentContainer14");
paragraphs14Ele.classList.add("paragraphs14");
seize14Ele.classList.add("seize14");
impactBtn14Ele.classList.add("impactBtn14");



// inner html
Header14Ele.innerHTML = `
<div class="headerWrapper">
    <div class="headerItem">
        <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
    </div>
    <div class="headerItem">Levelling Up</div>
    <div class="headerItem headerItemRight">
        <p>LevelUp ESG</p>
        <p>|</p>
        <p class="AssessmentContent">Sustainability Maturity
        <br/>Assessment </p>
    </div>
</div>
`
content_company14Ele.innerHTML = "levelling Up"
paragraphs14Ele.innerHTML = `
    <p>We are here to help you achieve net-zero, drive climate action, foster sustainable
    growth, and generate global positive impact. Our intelligent software platform
    and ecosystem services streamline carbon footprint and sustainability data
    tracking and reporting.</p>
    <br/>
    <p>Below, you can see where you stand and how we can continue to grow together.</p>
`
contentContainer14Ele.innerHTML = `
    <div class="card14">
        <img src="/static/images/icon2 (1).png" alt="img" class="card14Img"/>
        <h3 class="card14Title">Diagnostics & Benchmarking</h3>
        <p class="card14Desc"> The Sustainability Maturity Assessment helps businesses understand their current sustainability stance and provides a roadmap for getting started.</p>
    </div>
    <div class="card14">
        <img src="/static/images/icon2 (1).png" alt="img" class="card14Img"/>
        <h3 class="card14Title">Carbon Software</h3>
        <p class="card14Desc"> Our cloud-based, AI-powered software simplifies carbon footprint measurement, tracking, reporting, and reduction strategies. Businesses can identify key areas for improvement and make data-driven decisions to minimize their environmental impact.</p>
        <button class="card14Btn">See more</button>
    </div>
    <div class="card14">
        <img src="/static/images/Icon1(1).png" alt="img" class="card14Img"/>
        <h3 class="card14Title">Sustainability Plataform</h3>
        <p class="card14Desc">A centralized solution for businesses to streamline the collection, analysis, and reporting of their sustainability data across multiple dimensions. This cloud-based platform leverages advanced AI and machine learning capabilities to deliver insights and recommendations that help businesses gain greater control and drive continuous improvement in their sustainability performance.</p>
        <button class="card14Btn">See more</button>
    </div>
   
`
solution14Ele.innerHTML =`
    <p class="solution14">This report is just the <br/>
    first solution offered <br/>
    by LevelUp. </p>
`
seize14Ele.innerHTML = "Seize the opportunity to advance your ESG journey! "
impactBtn14Ele.innerHTML= `
    <img src="/static/images/logo.png" alt="logo" class="impactImg14"/>
    <span class="impactText14">Talk to our impact makers</span>
`

// AppendChild
document.body.appendChild(section14Ele)
section14Ele.appendChild(container14Ele)
container14Ele.appendChild(Header14Ele)
container14Ele.appendChild(sectionWrapper14Ele)
sectionWrapper14Ele.appendChild(content14Ele)
content14Ele.appendChild(content_company14Ele)
content14Ele.appendChild(paragraphs14Ele)
content14Ele.appendChild(contentContainer14Ele)
content14Ele.appendChild(solution14Ele)
content14Ele.appendChild(seize14Ele)
content14Ele.appendChild(impactBtn14Ele)