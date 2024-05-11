// data Quiz
const AllQuiz19 = [
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
    {
        quiz:" What are your organisation's key ESG objectives, and how do they align with your overall business strategy?",
        option1: "Limited alignment between ESG objectives and business strategy",
        option2: "Some alignment, but ESG objectives are not fully integrated",
        option3: "ESG objectives are aligned with business strategy, but not consistently implemented",
        option4: "ESG objectives are fully integrated into business strategy and consistently implemented",
        option5: "ESG objectives are a core driver of business strategy and decision-making",
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
let root19Ele = document.getElementById("root19");
let section19Ele = document.createElement("section")
let container19Ele = document.createElement("div")
let sectionWrapper19Ele = document.createElement("div")
let Header19Ele = document.createElement("header");
let content19Ele = document.createElement("div")
let Questions19PageEle = document.createElement("div")
let QuezData19Ele = document.createElement("div")


// Add Classes
container19Ele.classList.add("container");
sectionWrapper19Ele.classList.add("sectionWrapper");
Header19Ele.classList.add("header");
content19Ele.classList.add("content");
Questions19PageEle.classList.add("Questions19Page");
QuezData19Ele.classList.add("QuezData19");




// inner html
Header19Ele.innerHTML = `
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
Questions19PageEle.innerHTML = `
    <h1>Appendix: Questions</h1>
    <h5>General Information</h5>
`
AllQuiz19.forEach((item , index) => {
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
    QuezData19Ele.appendChild(ItemQuiz)
})


 // AppendChild
document.body.appendChild(section19Ele)
section19Ele.appendChild(container19Ele)
container19Ele.appendChild(Header19Ele)
container19Ele.appendChild(sectionWrapper19Ele)
sectionWrapper19Ele.appendChild(content19Ele)
content19Ele.appendChild(Questions19PageEle)
Questions19PageEle.appendChild(QuezData19Ele)