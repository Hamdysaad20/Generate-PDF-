// variables
let root25Ele = document.getElementById("root25");
let section25Ele = document.createElement("section")
let container25Ele = document.createElement("div")
let sectionWrapper25Ele = document.createElement("div")
let Header25Ele = document.createElement("header");
let content25Ele = document.createElement("div")
let Governance25Ele = document.createElement("div")


// Add Classes
container25Ele.classList.add("container");
sectionWrapper25Ele.classList.add("sectionWrapper");
Header25Ele.classList.add("header");
content25Ele.classList.add("content24");
Governance25Ele.classList.add("Governance25");



// inner html

Header25Ele.innerHTML = `
<div class="headerWrapper">
    <div class="headerItem">
        <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
    </div>
    <div class="headerItem">Annex</div>
    <div class="headerItem headerItemRight">
        <p>LevelUp ESG</p>
        <p>|</p>
        <p class="AssessmentContent">Sustainability Maturity
        <br/>Assessment </p>
    </div>
</div>
`
content25Ele.innerHTML = `
    <div class="gridComponent25">
        <div class="one25">ESG Components</div>
        <div class="three25">Corporate Governance </div>
        <div class="four25"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three25">Business and Stakeholder Engagement</div>
        <div class="four25"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three25">Sustainability Reporting</div>
        <div class="four25"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three25">Risk and Opportunities  Management </div>
        <div class="four25"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>

        <div class="three25">Transparency, anti-corruption and anti-bribery </div>
        <div class="four25"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae reprehenderit asperiores non deserunt omnis accusantium suscipit enim, aut quibusdam animi quia quasi, voluptatum, molestias esse at eligendi aperiam odit.</div>
    </div>
    <div class="governanceData25">
        <h4>Disclaimer: Market Average for ESG Performance</h4>
        <div class="governanceDataCard25">
            <div>
                <p>The Market average 2023 scores presented in the
                spider graph are intended as a general reference
                point for comparing an organisation's ESG
                performance against a broader market context.
                LevelUp ESG Ltd. makes no representations or
                warranties regarding the accuracy, completeness,
                reliability, or suitability of these averages for any
                specific purpose.
                
                </p>
                <p>Organisations using the ESG maturity assessment
                tool should interpret the Market average scores
                as a starting point for discussion and analysis
                rather than a definitive benchmark. Actual ESG
                performance may vary significantly depending on
                various factors.</p>
            </div>
            <div>
                <p>LevelUp ESG Ltd. shall not be liable for any damages
                arising from the use of or reliance on the Market
                average  scores or any decisions made based on these
                scores. Organizations are responsible for verifying the
                relevance and applicability of these averages to their
                specific context.</p>
                <p>The Market average scores may not reflect the latest
                trends, regulations, or best practices in the rapidly
                evolving field of sustainability. Organisations should
                regularly review and update their ESG strategies based
                on the most current information available.</p>
                <p>By using the Market average scores, organizations
                acknowledge and accept the limitations and disclaimers
                outlined above. For more information or guidance,
                please contact LevelUp ESG Ltd.</p>
            </div>
        </div>
    </div>
`
Governance25Ele.innerHTML = "Governance"


  // AppendChild
  document.body.appendChild(section25Ele)
  section25Ele.appendChild(container25Ele)
  container25Ele.appendChild(Header25Ele)
  container25Ele.appendChild(sectionWrapper25Ele)
  sectionWrapper25Ele.appendChild(content25Ele)
  content25Ele.appendChild(Governance25Ele)
