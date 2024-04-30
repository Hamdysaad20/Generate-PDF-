// variables
let root2Ele = document.getElementById("root2");
let section2Ele = document.createElement("section")
let container2Ele = document.createElement("div")
let sectionWrapper2Ele = document.createElement("div")
let logo2Ele = document.createElement("div")
let logo_img2Ele = document.createElement("img")
let content2Ele = document.createElement("div")

// Add Classes
container2Ele.classList.add("container");
sectionWrapper2Ele.classList.add("sectionWrapper");
logo2Ele.classList.add("logo");
logo_img2Ele.classList.add("logo_image");
content2Ele.classList.add("content");

 // set Attribute
 logo_img2Ele.setAttribute("src", "/static/images/logo.png");
 logo_img2Ele.setAttribute("alt", "logo");

//  inner Html
content2Ele.innerHTML = `
<h1 class="reportTitles2">Contents of the Report</h1>
<div class="TitlesItems2">
    <div class="item2">
        <div class="itemNumber2">1</div>
        <div class ="detailsTitle2">
            <div>Introduction</div>
            <div>.......................................................................</div>
            <div>1</div>
        </div>
    </div>
    <div class="item2">
        <div class="itemNumber2">2</div>
        <div class ="detailsTitle2">
            <div>Key Stages</div>
            <div>.......................................................................</div>
            <div>2</div>
        </div>
    </div>
    <div class="item2">
        <div class="itemNumber2">3</div>
        <div class ="detailsTitle2">
            <div>ESG Components</div>
            <div>.......................................................................</div>
            <div>3</div>
        </div>
    </div>
    <div class="item2">
        <div class="itemNumber2">4</div>
        <div class ="detailsTitle2">
            <div>Results</div>
            <div>.......................................................................</div>
            <div>4</div>
        </div>
    </div>
    <div class="item2">
        <div class="itemNumber2">5</div>
        <div class ="detailsTitle2">
            <div>SWOT Analysis</div>
            <div>.......................................................................</div>
            <div>8</div>
        </div>
    </div>
    <div class="item2">
        <div class="itemNumber2">6</div>
        <div class ="detailsTitle2">
            <div>Levelling Up</div>
            <div>.......................................................................</div>
            <div>11</div>
        </div>
    </div>
</div>
<div class="Appen2">Appendix</div>
<div class="Appen2">Annex</div>
`

   // AppendChild
document.body.appendChild(section2Ele)
section2Ele.appendChild(container2Ele)
container2Ele.appendChild(sectionWrapper2Ele)
sectionWrapper2Ele.appendChild(logo2Ele)
logo2Ele.appendChild(logo_img2Ele)
sectionWrapper2Ele.appendChild(content2Ele)