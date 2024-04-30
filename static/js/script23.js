// data Quiz
const AllQuiz23 = [
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
let root23Ele = document.getElementById("root23");
let section23Ele = document.createElement("section")
let container23Ele = document.createElement("div")
let sectionWrapper23Ele = document.createElement("div")
let logo23Ele = document.createElement("div")
let logo_img23Ele = document.createElement("img")
let content23Ele = document.createElement("div")
let Questions23PageEle = document.createElement("div")
let QuezData23Ele = document.createElement("div")


// Add Classes
container23Ele.classList.add("container");
sectionWrapper23Ele.classList.add("sectionWrapper");
logo23Ele.classList.add("logo");
logo_img23Ele.classList.add("logo_image");
content23Ele.classList.add("content");
Questions23PageEle.classList.add("Questions23Page");
QuezData23Ele.classList.add("QuezData23");


 // set Attribute
 logo_img23Ele.setAttribute("src", "/static/images/logo.png");
 logo_img23Ele.setAttribute("alt", "logo");


// inner html
Questions23PageEle.innerHTML = `
    <h1>Appendix: Questions</h1>
    <h5>General Information</h5>
`
AllQuiz23.forEach((item , index) => {
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
    QuezData23Ele.appendChild(ItemQuiz)
})


 // AppendChild
document.body.appendChild(section23Ele)
section23Ele.appendChild(container23Ele)
container23Ele.appendChild(sectionWrapper23Ele)
sectionWrapper23Ele.appendChild(logo23Ele)
logo23Ele.appendChild(logo_img23Ele)
sectionWrapper23Ele.appendChild(content23Ele)
content23Ele.appendChild(Questions23PageEle)
Questions23PageEle.appendChild(QuezData23Ele)