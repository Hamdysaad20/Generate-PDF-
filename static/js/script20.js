// data Quiz
const AllQuiz20 = [
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
let root20Ele = document.getElementById("root20");
let section20Ele = document.createElement("section")
let container20Ele = document.createElement("div")
let sectionWrapper20Ele = document.createElement("div")
let logo20Ele = document.createElement("div")
let logo_img20Ele = document.createElement("img")
let content20Ele = document.createElement("div")
let Questions20PageEle = document.createElement("div")
let QuezData20Ele = document.createElement("div")


// Add Classes
container20Ele.classList.add("container");
sectionWrapper20Ele.classList.add("sectionWrapper");
logo20Ele.classList.add("logo");
logo_img20Ele.classList.add("logo_image");
content20Ele.classList.add("content");
Questions20PageEle.classList.add("Questions20Page");
QuezData20Ele.classList.add("QuezData20");


 // set Attribute
 logo_img20Ele.setAttribute("src", "/static/images/logo.png");
 logo_img20Ele.setAttribute("alt", "logo");


// inner html
Questions20PageEle.innerHTML = `
    <h1>Appendix: Questions</h1>
    <h5>General Information</h5>
`
AllQuiz20.forEach((item , index) => {
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
    QuezData20Ele.appendChild(ItemQuiz)
})


 // AppendChild
document.body.appendChild(section20Ele)
section20Ele.appendChild(container20Ele)
container20Ele.appendChild(sectionWrapper20Ele)
sectionWrapper20Ele.appendChild(logo20Ele)
logo20Ele.appendChild(logo_img20Ele)
sectionWrapper20Ele.appendChild(content20Ele)
content20Ele.appendChild(Questions20PageEle)
Questions20PageEle.appendChild(QuezData20Ele)