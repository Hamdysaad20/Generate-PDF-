// variables
let root8Ele = document.getElementById("root8");
let section8Ele = document.createElement("section")
let container8Ele = document.createElement("div")
let sectionWrapper8Ele = document.createElement("div")
let Header8Ele = document.createElement("header");
let content8Ele = document.createElement("div")
let content_company8Ele = document.createElement("div")
let socialEle = document.createElement("div")


// Add Classes
container8Ele.classList.add("container");
sectionWrapper8Ele.classList.add("sectionWrapper");
Header8Ele.classList.add("header");
content8Ele.classList.add("content");
content_company8Ele.classList.add("content_company");
socialEle.classList.add("social");



// inner Html
Header8Ele.innerHTML = `
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
content_company8Ele.innerHTML = "Social";
socialEle.innerHTML = `
  <p> The social results illustrated in the spider chart reveal both your strengths and areas where development is possible. To gain a deeper understanding, let's analyse the information.
  </p>
  <div class="social8Img">
     <img src="/static/images/Spider1(1).png"/>
</div>
  <div class="line8"></div>
  <h3>Developing</h3>
  <p class="developingDesc8">Your social answers indicate that you are at the 'Developing' level. This classification
  is based on your responses to the following questions:</p>
  <ul>
    <li>S.1.</li>
    <li>S.2.</li>
    <li>S.3.</li>
    <li>S.4.</li>
  </ul>
`

  // AppendChild
document.body.appendChild(section8Ele)
section8Ele.appendChild(container8Ele)
container8Ele.appendChild(Header8Ele)
container8Ele.appendChild(sectionWrapper8Ele)
sectionWrapper8Ele.appendChild(content8Ele)
content8Ele.appendChild(content_company8Ele)
content8Ele.appendChild(socialEle)