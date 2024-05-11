// variables
let root4Ele = document.getElementById("root4");
let section4Ele = document.createElement("section")
let container4Ele = document.createElement("div")
let Header4Ele = document.createElement("header");
let sectionWrapper4Ele = document.createElement("div")
let logo4Ele = document.createElement("div")
let logo_img4Ele = document.createElement("img")
let content4Ele = document.createElement("div")
let content_company4Ele = document.createElement("div")
let KeyStages4Ele = document.createElement("div")

// Add Classes
container4Ele.classList.add("container");
sectionWrapper4Ele.classList.add("sectionWrapper");
Header4Ele.classList.add("header");
content4Ele.classList.add("content");
content_company4Ele.classList.add("content_company");
KeyStages4Ele.classList.add("KeyStages4");




  // inner Html
  Header4Ele.innerHTML = `
  <div class="headerWrapper">
      <div class="headerItem">
          <img src="/static/images/logo.png" alt="logo" class="logo_image"/>
      </div>
      <div class="headerItem">Key Stages</div>
      <div class="headerItem headerItemRight">
          <p>LevelUp ESG</p>
          <p>|</p>
          <p class="AssessmentContent">Sustainability Maturity
          <br/>Assessment </p>
      </div>
  </div>
`
content_company4Ele.innerHTML = "Key Stages";
KeyStages4Ele.innerHTML = `
    <div class="KeyOne4">
        <h2>Congratulations! 
            <br/>
            Your proactive initiative exhibits an admirable commitment.
        </h2>
        <div class="ContentKeyOne4">
            <p>
                By leveraging LevelUp's maturity assessment,
                your proactive endeavor demonstrates an
                admirable commitment to sustainability. This
                strategic move will provide valuable insights
                into your organisation's current
                environmental, social, and governance
                practices. It will identify specific areas that
                require improvement and highlight the key
                focus areas moving forward.
            </p>
            <p>
                This initiative underscores your company's
                commitment to sustainable practices and sets you
                apart from the few businesses that have made
                significant progress in achieving better
                compliance and sustainability.
                Your proactive approach to conducting a maturity
                assessment is admirable and positions your
                organisation as a leader driving positive change.
                Build upon this momentum and pave the way for a
                more responsible and successful future.
            </p>
        </div>
    </div>
    <div class="line4"></div>
    <div class="KeyTwo4">
        <div class="ContentKeyTwo4">
            <div class="KeyTwoLeft4">
                <div class="KeyTitleLeft4">
                    <div class="KeyNum4 nums4">4</div>
                    <h4>Key Stages to Strengthen Sustainability Disclosures</h4>
                </div>
                <p>
                    By following these 4 stages and
                    actions, you can effectively
                    strengthen your organisation's
                    sustainability fundamentals
                    through a structured and
                    comprehensive approach.
                </p>
            </div>
            <div class="KeyTwoRight4">
                <div class="KeyTitleRight4">
                    <div class="KeyNum4"> 
                        <div class="nums4">1</div>
                        <div>Assess</div>
                    </div>
                    <div class="shape4"></div>
                </div>
                <div class="DataLeftTwo4">
                    <h5>Self- Assessment</h5>
                    <p>
                        Assess your organization's
                        current state of
                        sustainability matters
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="KeyThree4">
        <div class="KeyNum4"> 
            <div class="nums4">2</div>
            <div>Plan</div>
        </div>
        <div class="shape4"></div>
    </div>
    <div class="KeyFour4">
        <div class="KeyLineFour4"></div>
        <div class="KeyFour4Data">
             <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Identification</h5>
                <p>Identify specific areas for
                    improvement within your
                    sustainability practices
                </p>
            </div>
             <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Focus Area</h5>
                <p>Pinpoint focus areas for
                    enhancement to align
                    with sustainability goals
                </p>
            </div>
             <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Benchmarking</h5>
                <p>Benchmark your sustainability
                    maturity against industry
                    standards
                </p>
            </div>
             <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Roadmap Development</h5>
                <p>Develop a roadmap for
                    progress based on
                    assessment results
                </p>
             </div>
        </div>
    </div>
    <div class="KeyFive4">
        <div class="ShapesContainer4">
            <div class="KeyNumLeft4"> 
                <div class="DataNums">
                    <div class="nums4">3</div>
                    <div>Execute</div> 
                </div>
                <div class="shapeKeyFive4"></div> 
            </div>
            
            <div class="KeyNumRight4"> 
                <div class="DataNums">
                    <div class="nums4">4</div>
                    <div>Report</div>
                </div>
                <div class="shapeKeyFive4"></div>
            </div>
        </div>
    </div>
    <div class="KeySix4">
        <div class="KeyLineSix4"></div>
        <div class="KeyFour4Data">
            <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Implementation</h5>
                <p>Implement changes
                    based on the
                    developed roadmap
                </p>
            </div>
            <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Monitoring</h5>
                <p>Continuously monitor
                    progress and adjust
                    strategies as needed
                </p>
            </div>
            <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Collaboration</h5>
                <p>Collaborate with internal
                    and external partners to
                    enhance sustainability
                    initiatives
                </p>
            </div>
            <div class="KeyFour4DataItem">
                <i class="fa-regular fa-rectangle-list"></i>
                <h5>Prioritization</h5>
                <p>Prioritize addressing regulation,
                    efficiency, and resource
                    management for sustainable
                    practices
                </p>
            </div>
        </div>
    </div>
`


  // AppendChild
  document.body.appendChild(section4Ele)
  section4Ele.appendChild(container4Ele)
  container4Ele.appendChild(Header4Ele)
  container4Ele.appendChild(sectionWrapper4Ele)
  sectionWrapper4Ele.appendChild(logo4Ele)
  logo4Ele.appendChild(logo_img4Ele)
  sectionWrapper4Ele.appendChild(content4Ele)
  content4Ele.appendChild(content_company4Ele)
  content4Ele.appendChild(KeyStages4Ele)