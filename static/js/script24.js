// variables
let root24Ele = document.getElementById("root24");
let section24Ele = document.createElement("section")
let container24Ele = document.createElement("div")
let sectionWrapper24Ele = document.createElement("div")
let logo24Ele = document.createElement("div")
let logo_img24Ele = document.createElement("img")
let content24Ele = document.createElement("div")
let Environmental24Ele = document.createElement("div")
let Social24Ele = document.createElement("div")

// Add Classes
container24Ele.classList.add("container");
sectionWrapper24Ele.classList.add("sectionWrapper");
logo24Ele.classList.add("logo");
logo_img24Ele.classList.add("logo_image");
content24Ele.classList.add("content24");
Environmental24Ele.classList.add("Environmental24");
Social24Ele.classList.add("Social24");

// set Attribute
logo_img24Ele.setAttribute("src", "/static/images/logo.png");
logo_img24Ele.setAttribute("alt", "logo");


// inner html
content24Ele.innerHTML = `
    <div class="gridComponent24">
        <div class="one24">ESG Components</div>
        <div class="three24">Energy  Consumption  and GHG emissions </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Resources Managment, Circularity  and Waste Reduction </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Water Management</div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Sustainability Impact Assement  </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Net Zero emissions target  </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Diversity, Equity and Inclusion</div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Employee Relations and Talent  Management </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Workplace Health and Safety </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three24">Value Chain Workers and Community Engagement  </div>
        <div class="four24"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

    </div>
`
Environmental24Ele.innerHTML = "Environmental"
Social24Ele.innerHTML ="Social"

  // AppendChild
  document.body.appendChild(section24Ele)
  section24Ele.appendChild(container24Ele)
  container24Ele.appendChild(sectionWrapper24Ele)
  sectionWrapper24Ele.appendChild(logo24Ele)
  logo24Ele.appendChild(logo_img24Ele)
  sectionWrapper24Ele.appendChild(content24Ele)
  content24Ele.appendChild(Environmental24Ele)
  content24Ele.appendChild(Social24Ele)