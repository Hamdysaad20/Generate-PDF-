// variables
let root7Ele = document.getElementById("root7");
let section7Ele = document.createElement("section")
let container7Ele = document.createElement("div")
let sectionWrapper7Ele = document.createElement("div")
let logo7Ele = document.createElement("div")
let logo_img7Ele = document.createElement("img")
let content7Ele = document.createElement("div")
let content_companyEle = document.createElement("div")
let environmentalEle = document.createElement("div")


// Add Classes
container7Ele.classList.add("container");
sectionWrapper7Ele.classList.add("sectionWrapper");
logo7Ele.classList.add("logo");
logo_img7Ele.classList.add("logo_image");
content7Ele.classList.add("content");
content_companyEle.classList.add("content_company");
environmentalEle.classList.add("environmental");

 // set Attribute
logo_img7Ele.setAttribute("src", "/static/images/logo.png");
 logo_img7Ele.setAttribute("alt", "logo");

// inner Html
content_companyEle.innerHTML = "Environmental";
environmentalEle.innerHTML = `
  <p>The environmental results depicted in the spider chart showcase areas where you excel and areas
  with potential for improvement. To better comprehend the data, keep an eye on the details.
  </p>
  <img src="/static/images/spider_chart.png"/>
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
container7Ele.appendChild(sectionWrapper7Ele)
sectionWrapper7Ele.appendChild(logo7Ele)
logo7Ele.appendChild(logo_img7Ele)
sectionWrapper7Ele.appendChild(content7Ele)
content7Ele.appendChild(content_companyEle)
content7Ele.appendChild(environmentalEle)