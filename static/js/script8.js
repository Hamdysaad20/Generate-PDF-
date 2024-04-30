// variables
let root8Ele = document.getElementById("root8");
let section8Ele = document.createElement("section")
let container8Ele = document.createElement("div")
let sectionWrapper8Ele = document.createElement("div")
let logo8Ele = document.createElement("div")
let logo_img8Ele = document.createElement("img")
let content8Ele = document.createElement("div")
let content_company8Ele = document.createElement("div")
let socialEle = document.createElement("div")


// Add Classes
container8Ele.classList.add("container");
sectionWrapper8Ele.classList.add("sectionWrapper");
logo8Ele.classList.add("logo");
logo_img8Ele.classList.add("logo_image");
content8Ele.classList.add("content");
content_company8Ele.classList.add("content_company");
socialEle.classList.add("social");

 // set Attribute
logo_img8Ele.setAttribute("src", "/static/images/logo.png");
 logo_img8Ele.setAttribute("alt", "logo");

// inner Html
content_company8Ele.innerHTML = "Social";
socialEle.innerHTML = `
  <p> The social results illustrated in the spider chart reveal both your strengths and areas where development is possible. To gain a deeper understanding, let's analyse the information.
  </p>
  <img src="/static/images/spider_chart.png"/>
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
container8Ele.appendChild(sectionWrapper8Ele)
sectionWrapper8Ele.appendChild(logo8Ele)
logo8Ele.appendChild(logo_img8Ele)
sectionWrapper8Ele.appendChild(content8Ele)
content8Ele.appendChild(content_company8Ele)
content8Ele.appendChild(socialEle)