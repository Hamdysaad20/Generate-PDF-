// Data
const listItemData = [
    {
        title: "Data Collection and Management",
        description: "Gathering accurate and reliable ESG data across different departments and locations can be challenging. Inconsistent data can lead to misrepresentation of ESG performance and reputational risks"
    },
    {
        title: "Regulatory Compliance",
        description: "With the rapidly evolving ESG regulatory landscape, businesses may struggle to keep up with new requirements and face compliance risks."
    },
    {
        title: "Stakeholder Expectations ",
        description: "Failing to meet the growing ESG expectations of investors, customers, and other stakeholders can result in reputational damage, loss of business, and decreased access to capital."
    },
    {
        title: "Resource Constraints",
        description: "Implementing ESG initiatives can require significant financial and human resources, which may strain businesses, particularly small and medium-sized enterprises. "
    },
    {
        title: "Greenwashing Accusations",
        description: "Businesses may face accusations of greenwashing if their ESG claims are perceived as misleading or unsupported by concrete actions, leading to reputational risks."
    },
    
];
const lists = ["Comperehensive ESG Assessment", "ESG Program Support & Assurance", "Data Management Solutions" , "Decarbonisation & Regulatory Expertise"];

// variables
let rootEle = document.getElementById("root13");

let sectionEle = document.createElement("section")
let containerEle = document.createElement("div")
let sectionWrapperEle = document.createElement("div")
let logoEle = document.createElement("div")
let logo_imgEle = document.createElement("img")
let contentEle = document.createElement("div")
let content_company13Ele = document.createElement("div")
let content_titleEle = document.createElement("h2")
let content_descEle = document.createElement("p")
let TitleListEle = document.createElement("h4")
let listContainerEle = document.createElement("div")
let HelpsBtnEle = document.createElement("div")
let listsEle = document.createElement("div")

// set Attribute
logo_imgEle.setAttribute("src", "/static/images/logo.png");
logo_imgEle.setAttribute("alt", "logo");

// Add classes
sectionEle.classList.add("section13");
containerEle.classList.add("container");
sectionWrapperEle.classList.add("sectionWrapper");
logoEle.classList.add("logo");
logo_imgEle.classList.add("logo_image");
contentEle.classList.add("content");
content_company13Ele.classList.add("content_company");
content_titleEle.classList.add("content_title");
content_descEle.classList.add("content_desc");
TitleListEle.classList.add("TitleList");
listContainerEle.classList.add("listItem");
HelpsBtnEle.classList.add("HelpsBtn");
listsEle.classList.add("listsItem");

// inner html
content_company13Ele.innerHTML = "levelling Up"
content_titleEle.innerHTML = "Navigating ESG Risks and Challenges"
content_descEle.innerHTML = "Embarking on an ESG journey can present risks and challenges for businesses. However, with the right tools, guidance, and support, these risks can be effectively mitigated."
TitleListEle.innerHTML = "Potential Risks and Challenges"
HelpsBtnEle.innerHTML = "How LevelUp ESG Mitigate Risks"



// loop Data
listItemData.forEach((item, index) => {
    let listItemEle = document.createElement("div");
    listItemEle.classList.add("itemContent");
    listItemEle.innerHTML = `
        <div class="numbersList">${index + 1}</div>
        <div class="content_list">
            <h5 class="itemTitle">${item.title}</h5>
             <p class="itemDescEle">${item.description}</p>
        </div>
        
    `;
    listContainerEle.appendChild(listItemEle);
});
lists.forEach(( item) => {
    let Item = document.createElement("div");
    Item.classList.add("itemList");
    Item.innerHTML = `
        <div class="item">${item}</div>
        
    `;
    listsEle.appendChild(Item);
});

// AppendChild
sectionEle.appendChild(containerEle)
containerEle.appendChild(sectionWrapperEle)
sectionWrapperEle.appendChild(logoEle)
sectionWrapperEle.appendChild(contentEle)
logoEle.appendChild(logo_imgEle)
contentEle.appendChild(content_company13Ele)
contentEle.appendChild(content_titleEle)
contentEle.appendChild(content_descEle)
contentEle.appendChild(TitleListEle)
contentEle.appendChild(listContainerEle)
contentEle.appendChild(HelpsBtnEle)
contentEle.appendChild(listsEle)

document.body.appendChild(sectionEle);



