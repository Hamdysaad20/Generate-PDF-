// data Quiz
const AllQuiz22 = [
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
let root22Ele = document.getElementById("root22");
let section22Ele = document.createElement("section")
let container22Ele = document.createElement("div")
let sectionWrapper22Ele = document.createElement("div")
let logo22Ele = document.createElement("div")
let logo_img22Ele = document.createElement("img")
let content22Ele = document.createElement("div")
let Questions22PageEle = document.createElement("div")
let QuezData22Ele = document.createElement("div")


// Add Classes
container22Ele.classList.add("container");
sectionWrapper22Ele.classList.add("sectionWrapper");
logo22Ele.classList.add("logo");
logo_img22Ele.classList.add("logo_image");
content22Ele.classList.add("content");
Questions22PageEle.classList.add("Questions22Page");
QuezData22Ele.classList.add("QuezData22");


 // set Attribute
 logo_img22Ele.setAttribute("src", "/static/images/logo.png");
 logo_img22Ele.setAttribute("alt", "logo");


// inner html
Questions22PageEle.innerHTML = `
    <h1>Appendix: Questions</h1>
    <h5>General Information</h5>
`
AllQuiz22.forEach((item , index) => {
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
    QuezData22Ele.appendChild(ItemQuiz)
})


 // AppendChild
document.body.appendChild(section22Ele)
section22Ele.appendChild(container22Ele)
container22Ele.appendChild(sectionWrapper22Ele)
sectionWrapper22Ele.appendChild(logo22Ele)
logo22Ele.appendChild(logo_img22Ele)
sectionWrapper22Ele.appendChild(content22Ele)
content22Ele.appendChild(Questions22PageEle)
Questions22PageEle.appendChild(QuezData22Ele)