const AllQuiz17 = [
    {
        quiz:"What type of undertaking is your organisation categorised as per the threshold set by the voluntary ESRS for Non-listed Small and Medium-sized Enterprise standards?",
        option1: "Micro",
        option2: "Medium",
        option3: "Large",
        option4: "Small",
        option5: "Non-profit",
    },
    {
        quiz:" What are your organisation's key ESG objectives, and how do they align with your overall business strategy?",
        option1: "Limited alignment between ESG objectives and business strategy",
        option2: "Some alignment, but ESG objectives are not fully integrated",
        option3: "ESG objectives are aligned with business strategy, but not consistently implemented",
        option4: "ESG objectives are fully integrated into business strategy and consistently implemented",
        option5: "ESG objectives are a core driver of business strategy and decision-making",
    },
]






// variables
let root17Ele = document.getElementById("root17");
let section17Ele = document.createElement("section")
let container17Ele = document.createElement("div")
let sectionWrapper17Ele = document.createElement("div")
let Header17Ele = document.createElement("header");
let content17Ele = document.createElement("div")
let Questions17PageEle = document.createElement("div")
let QuezData17Ele = document.createElement("div")


// Add Classes
container17Ele.classList.add("container");
sectionWrapper17Ele.classList.add("sectionWrapper");
Header17Ele.classList.add("header");
content17Ele.classList.add("content");
Questions17PageEle.classList.add("Questions17Page");
QuezData17Ele.classList.add("QuezData17");



// inner html
Header17Ele.innerHTML = `
<div class="headerWrapper">
    <div class="headerItem">
        <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
    </div>
    <div class="headerItem">Appendix</div>
    <div class="headerItem headerItemRight">
        <p>LevelUp ESG</p>
        <p>|</p>
        <p class="AssessmentContent">Sustainability Maturity
        <br/>Assessment </p>
    </div>
</div>
`
Questions17PageEle.innerHTML = `
    <h1>Appendix: Questions</h1>
    <h5>General Information</h5>
`
AllQuiz17.forEach((item , index) => {
    let ItemQuiz = document.createElement("div");
    ItemQuiz.classList.add("ItemQuiz");
    ItemQuiz.innerHTML = `
        <div class = "Quiz">
            <span>${index + 1} - </span>
            <span class="item">${item.quiz}</span> <br/>
        </div>
        <div class ="option">
            <input type="checkbox"  name=${item.option1}>
            <label for="vehicle1"> ${item.option1}</label>
        </div>
        <div class ="option">
            <input type="checkbox"  name=${item.option2} >
            <label for="vehicle2">${item.option2}</label>
        </div>
        <div class ="option">
            <input type="checkbox"  name=${item.option3}>
            <label for="vehicle3"> ${item.option3}</label>
        </div>
        <div class ="option">
            <input type="checkbox"  name=${item.option4}>
            <label for="vehicle3"> ${item.option4}</label>
        </div>
        <div class ="option">
            <input type="checkbox"  name=${item.option5}>
            <label for="vehicle3"> ${item.option5}</label>
        </div>
        
        
        
        
        
        
    `;
    QuezData17Ele.appendChild(ItemQuiz)
})


 // AppendChild
document.body.appendChild(section17Ele)
section17Ele.appendChild(container17Ele)
container17Ele.appendChild(Header17Ele)
container17Ele.appendChild(sectionWrapper17Ele)
sectionWrapper17Ele.appendChild(content17Ele)
content17Ele.appendChild(Questions17PageEle)
Questions17PageEle.appendChild(QuezData17Ele)