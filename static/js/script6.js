// variables
let root6Ele = document.getElementById("root6");
let section6Ele = document.createElement("section")
let container6Ele = document.createElement("div")
let sectionWrapper6Ele = document.createElement("div")
let Header6Ele = document.createElement("header");
let content6Ele = document.createElement("div")
let content_company6Ele = document.createElement("div")
let Results6Ele = document.createElement("div")


// Add Classes
container6Ele.classList.add("container");
sectionWrapper6Ele.classList.add("sectionWrapper");
Header6Ele.classList.add("header");
content6Ele.classList.add("content");
content_company6Ele.classList.add("content_company10");
Results6Ele.classList.add("Results6");

 

 // inner Html
 Header6Ele.innerHTML = `
 <div class="headerWrapper">
     <div class="headerItem">
         <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
     </div>
     <div class="headerItem">Introduction</div>
     <div class="headerItem headerItemRight">
         <p>LevelUp ESG</p>
         <p>|</p>
         <p class="AssessmentContent">Sustainability Maturity
         <br/>Assessment </p>
     </div>
 </div>
`
 content_company6Ele.innerHTML = "Your overall results";
Results6Ele.innerHTML = `
    <div class="ResultESG6">
        <div class="social6">Social</div>
        <div class="social6_100">100%</div>
        <div class="environmental6">Environmental</div>
        <div class="environmental6_100">100%</div>
        <div class="governance6">Governance</div>
        <div class="governance6_100">100%</div>
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
                <img src="/static/images/Tree2.png" alt="TreeResult"/>
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
                <img src="/static/images/Tree2.png" alt="TreeResult"/>
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
                <img src="/static/images/Tree2.png" alt="TreeResult"/>
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
                <img src="/static/images/Tree2.png" alt="TreeResult"/>
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
                <img src="/static/images/Tree2.png" alt="TreeResult"/>
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
    Now, in the next pages first we analysed each component in detail <br/> 
    <span>the environmental, social, and governance results</span>. 
    </div>
 `;

  // AppendChild
  document.body.appendChild(section6Ele)
  section6Ele.appendChild(container6Ele)
  container6Ele.appendChild(Header6Ele)
  container6Ele.appendChild(sectionWrapper6Ele)
  sectionWrapper6Ele.appendChild(content6Ele)
  content6Ele.appendChild(content_company6Ele)
  content6Ele.appendChild(Results6Ele)