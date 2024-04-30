// variables
let root6Ele = document.getElementById("root6");
let section6Ele = document.createElement("section")
let container6Ele = document.createElement("div")
let sectionWrapper6Ele = document.createElement("div")
let logo6Ele = document.createElement("div")
let logo_img6Ele = document.createElement("img")
let content6Ele = document.createElement("div")
let content_company6Ele = document.createElement("div")
let Results6Ele = document.createElement("div")


// Add Classes
container6Ele.classList.add("container");
sectionWrapper6Ele.classList.add("sectionWrapper");
logo6Ele.classList.add("logo");
logo_img6Ele.classList.add("logo_image");
content6Ele.classList.add("content");
content_company6Ele.classList.add("content_company10");
Results6Ele.classList.add("Results6");

 // set Attribute
logo_img6Ele.setAttribute("src", "/static/images/logo.png");
 logo_img6Ele.setAttribute("alt", "logo");

 // inner Html
 content_company6Ele.innerHTML = "Your overall results";
Results6Ele.innerHTML = `
    <div class="ResultImg">
        <img src="/static/images/logo.png" alt="ESGResult"/>
    </div>
    <div class="resultData6">
        The outcome of the self-assessment level in contrast to your results is that you are at
        the ‘Developing’ level, while you thought you were at the ‘Beginning’ level.
    </div>
    <div class="resultTree6">
       <div class="resultTreeItem">
            <h6>You thought you were here!</h6>
            <div class="iconLocation6">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="TreeOneImg6">
                <img src="/static/images/logo.png" alt="TreeResult"/>
            </div>
            <h4>Beginning</h4>
            <p>
                We understand the significance of ESG/sustainability but
                have not started developing a formal strategy or integrating it
                into our business operations yet.
            </p>
       </div> 
       <div class="resultTreeItem">
            <h6>We are here!</h6>
            <div class="iconLocation6">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="TreeTwoImg6">
                <img src="/static/images/logo.png" alt="TreeResult"/>
            </div>
            <h4>Developing</h4>
            <p>
            We are in the early stages
            of developing an
            ESG/sustainability
            strategy, and it is not yet
            fully integrated into our
            business operations.
            </p>
        </div>  
       <div class="resultTreeItem">
            <div class="TreeThreeImg6">
                <img src="/static/images/logo.png" alt="TreeResult"/>
            </div>
            <h4>Maturing</h4>
            <p>
            We have a developed
            ESG/sustainability strategy
            but are still in the process
            of fully integrating it into
            our business operations.
            </p>
        </div>  
       <div class="resultTreeItem">
            <div class="TreeFourImg6">
                <img src="/static/images/logo.png" alt="TreeResult"/>
            </div>
            <h4>Advancing</h4>
            <p>
            We have a well-defined
            ESG strategy integrated
            into core business;
            measuring and
            reporting on
            performance.
            </p>
        </div>  
       <div class="resultTreeItem">
            <div class="TreeFiveImg6">
                <img src="/static/images/logo.png" alt="TreeResult"/>
            </div>
            <h4>Leading</h4>
            <p>
            We have a well-established
            ESG/sustainability strategy,
            integrated into our core
            business operations, with
            dedicated resources and
            metrics to monitor progress.
            </p>
        </div>  
    </div>
    <div class="resultDataEnd6">
    Now, in the next pages first we analysed each component in detail 
    the environmental, social, and governance results. 
    </div>
 `;

  // AppendChild
  document.body.appendChild(section6Ele)
  section6Ele.appendChild(container6Ele)
  container6Ele.appendChild(sectionWrapper6Ele)
  sectionWrapper6Ele.appendChild(logo6Ele)
  logo6Ele.appendChild(logo_img6Ele)
  sectionWrapper6Ele.appendChild(content6Ele)
  content6Ele.appendChild(content_company6Ele)
  content6Ele.appendChild(Results6Ele)