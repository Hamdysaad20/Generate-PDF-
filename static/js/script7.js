// variables
let root7Ele = document.getElementById("root7");
let section7Ele = document.createElement("section")
let container7Ele = document.createElement("div")
let sectionWrapper7Ele = document.createElement("div")
let Header7Ele = document.createElement("header");
let content7Ele = document.createElement("div")
let content_companyEle = document.createElement("div")
let environmentalEle = document.createElement("div")


// Add Classes
container7Ele.classList.add("container");
sectionWrapper7Ele.classList.add("sectionWrapper");
Header7Ele.classList.add("header");
content7Ele.classList.add("content");
content_companyEle.classList.add("content_company");
environmentalEle.classList.add("environmental");



// inner Html
Header7Ele.innerHTML = `
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
content_companyEle.innerHTML = "Environmental";
environmentalEle.innerHTML = `
  <p>The environmental results depicted in the spider chart showcase areas where you excel and areas
  with potential for improvement. To better comprehend the data, keep an eye on the details.
  </p>
  <div class="environmental7Img">
    <img src="/static/images/Spider1(1).png"/>
  </div>
  <div class="line7"></div>
  <h3>Advancing</h3>
  <p class="advancingDesc7">Your environmental answers indicate that you are at the 'Advancing' level. This
  classification is based on your responses to the following questions:</p>
  <ul>
    <li>E.1.</li>
    <li>E.2.</li>
    <li>E.3.</li>
    <li>E.4.</li>
    <li>E.5.</li>
  </ul>
`;

  // AppendChild
document.body.appendChild(section7Ele)
section7Ele.appendChild(container7Ele)
container7Ele.appendChild(Header7Ele)
container7Ele.appendChild(sectionWrapper7Ele)
sectionWrapper7Ele.appendChild(content7Ele)
content7Ele.appendChild(content_companyEle)
content7Ele.appendChild(environmentalEle)