// variables
let root26Ele = document.getElementById("root26");
let section26Ele = document.createElement("section")
let container26Ele = document.createElement("div")
let sectionWrapper26Ele = document.createElement("div")


// Add Classes
section26Ele.classList.add("Home26");
container26Ele.classList.add("container");
sectionWrapper26Ele.classList.add("sectionWrapper");

// inner html
sectionWrapper26Ele.innerHTML = `
    <div class="EndReportHeader26">
        <div class="EndReportHeader26Img">
            <img src="/static/images/logo.png" alt="logo"/>
        </div>
        <p>This report was created with cutting-<br/>
            edge technology and expert insights
            from LevelUp ESG</p>
    </div>
    <div class="lines26">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="EndReportSection26">
        <h4>Our intelligent platform and ecosystem empower businesses to:</h4>
        <div class="iconsChecked26">
            <i class="fa-solid fa-check check26"></i>
            <i class="fa-solid fa-check check026"></i>
            <i class="fa-solid fa-check check0026"></i>
        </div>
        <div class="Check26">
            <input type="checkbox"  name="" >
            <label for="vehicle1"> Gain control over their sustainability data
            </label>
            <i class="fa-regular fa-rectangle-list"></i>
        </div>
        <div class="Check26">
            <input type="checkbox"  name="" >
            <label for="vehicle1">Decarbonise their operations
            </label>
            <i class="fa-regular fa-rectangle-list"></i>
        </div>
        <div class="Check26">
            <input type="checkbox"  name="" >
            <label for="vehicle1"> Achieve their net-zero and ESG goals
            </label>
            <i class="fa-regular fa-rectangle-list"></i>
        </div>
    </div>
    <div class="EndReportFooter26">
        <div>To learn more about how we can help your organisation,
            visit our website or contact us directly:</div>
        <div>Website: www.levelupesg.co 
            <br/>Email: impact@levelupesg.co
        </div>
        <div>For personalised assistance, please reach out to:
        </div>
        <div>
            Ahmed Shawky Mohammed <br/>
            Managing Director, LevelUp ESG Ltd.<br/>
            Email: Ahmed@levelupesg.co
        </div>
    </div>
`

 // AppendChild
 document.body.appendChild(section26Ele)
 section26Ele.appendChild(container26Ele)
 container26Ele.appendChild(sectionWrapper26Ele)