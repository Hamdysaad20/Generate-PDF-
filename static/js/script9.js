// variables
let root9Ele = document.getElementById("root9");
let section9Ele = document.createElement("section")
let container9Ele = document.createElement("div")
let sectionWrapper9Ele = document.createElement("div")
let Header9Ele = document.createElement("header");
let content9Ele = document.createElement("div")
let content_company9Ele = document.createElement("div")
let governanceEle = document.createElement("div")


// Add Classes
container9Ele.classList.add("container");
sectionWrapper9Ele.classList.add("sectionWrapper");
Header9Ele.classList.add("header");
content9Ele.classList.add("content");
content_company9Ele.classList.add("content_company");
governanceEle.classList.add("governance");


// inner Html
Header9Ele.innerHTML = `
<div class="headerWrapper">
    <div class="headerItem">
        <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
    </div>
    <div class="headerItem">Results</div>
    <div class="headerItem headerItemRight">
        <p>LevelUp ESG</p>
        <p>|</p>
        <p class="AssessmentContent">Sustainability Maturity
        <br/>Assessment </p>
    </div>
</div>
`
content_company9Ele.innerHTML = "Governance";
governanceEle.innerHTML = `
    <p>Turning our attention to governance, often perceived as the most challenging category,
    this spider chart reveals both strong and weak areas that can be explored in the
    subsequent analysis.
    </p>
    <div class="governance9Img">
        <img src="/static/images/Spider1(1).png"/>
    </div>
    <div class="line8"></div>
    <h3>Beginning</h3>
    <p class="beginningDesc9">Your governance answers indicate that you are at the 'Beginning' level. This classification
    is based on your responses to the following questions:
    </p>
    <ul>
        <li>G.1.</li>
        <li>G.2.</li>
        <li>G.3.</li>
        <li>G.4.</li>
    </ul>
`

  // AppendChild
document.body.appendChild(section9Ele)
section9Ele.appendChild(container9Ele)
container9Ele.appendChild(Header9Ele)
container9Ele.appendChild(sectionWrapper9Ele)
sectionWrapper9Ele.appendChild(content9Ele)
content9Ele.appendChild(content_company9Ele)
content9Ele.appendChild(governanceEle)