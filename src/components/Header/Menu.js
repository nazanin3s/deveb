import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/appcontext";
import MenuLink from "./MenuLink";
import ThemeSwitch from "./../ThemeSwitch/ThemeSwitch";

export default function Menu({ activeRoute, linkClicked, leftPart = true, moveLinks, linksOut}) {
  const {changePointer, isMobile} = useAppContext()
  const leavem = (e)=>{

    linksOut(e);
    changePointer({isHover: false,})

  }
  return (
    <div className="menu-box" 
      // style={{ backgroundImage: 'url(./Sc.png)', backgroundPosition: 'top center',
      //  backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
       >

        {/* <Tilt className="menu-tilt" options={{ max: 5, scale: 1 }} >
          {/* <div className="menu-back">
          </div> */}
        {/*</div></Tilt> */}
        
        {
          leftPart ? 
            <div className="menu-left-part">
              <div className="top">
                <span className="head">Get in touch</span>
                <MenuLink
                  to="mailto:am@am-arc.com"
                  name="email"
                  txt="info@deveb.co"
                  moveLinks={!isMobile?moveLinks : null}
                  linksOut={!isMobile?linksOut : null}
                />
              </div>

              <div className="mid">
                <span className="head">Social</span>
                <MenuLink to="https://www.instagram.com/deveb.co/?hl=en" name="insta" txt="Instagram" moveLinks={moveLinks} linksOut={linksOut}/>
                <MenuLink to="https://dribbble.com/Deveb_co/about"  name="Telegram" txt="Dribbble" moveLinks={moveLinks} linksOut={linksOut}/>
                <MenuLink to="https://www.behance.net/deveb" name="behance" txt="Behance" moveLinks={moveLinks} linksOut={linksOut}/>
                <MenuLink to="https://www.linkedin.com/company/deveb/" name="Linkedin" txt="Linkedin" moveLinks={moveLinks} linksOut={linksOut}/>
                <MenuLink to="https://github.com/deveb-co" name="Github" txt="Github" moveLinks={moveLinks} linksOut={linksOut}/>
                <MenuLink to="https://www.upwork.com/agencies/~015873da0933dd1dbd/" name="upwork" txt="Upwork" moveLinks={moveLinks} linksOut={linksOut}/>
              
              </div>

              {/* <div className="bott">
                <span className="head">Theme</span>
                <ThemeSwitch />
              </div> */}
            </div>
          :
            ''
        }

        <div className="menu-right-part">
       { leftPart ?  <span className="head">Menu</span> : ''}
          <Link
            to="/services"
            className={activeRoute === "services" ? "active fc" : "fc"}
            onClick={() => linkClicked("services")}
            onMouseMove={moveLinks}
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
      onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}

          >
            Services
          </Link>
          <Link
            to="/projects"
            className={`projects-link ${
              activeRoute === "projects" ? "active" : ""
            }`}
            onClick={() => linkClicked("projects")}
            onMouseMove={moveLinks}
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
      onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}

          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`about-link ${activeRoute === "about" ? "active" : ""}`}
            onClick={() => linkClicked("about")}
            onMouseMove={moveLinks}
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
      onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}

          >
            About
          </Link>
          <Link
            to="/contact"
            className={activeRoute === "contact" ? "active" : ""}
            onClick={() => linkClicked("contact")}
            onMouseMove={moveLinks}
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
      onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}

          >
            Contacts
          </Link>
        </div>

        {
          !leftPart ? 
            <div className="bottom-part">
              <Link
                to="/contact"
                aria-label="estimate-project"
                className="estimate-btn btn"
                onClick={() => linkClicked("contact")}
              >
                Estimate Project
              </Link>

              <div className="header-socials">

                {/* Upwork */}
                <a href='https://www.linkedin.com/company/deveb/' target="_blank" rel="noopener noreferrer">
                   <svg xmlns="http://www.w3.org/2000/svg" className="linkedin" fill="#000000" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                   </a>
                <a href='https://github.com/Deveb-co' target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.5 16">
                 <g id="Group_1189" data-name="Group 1189" transform="translate(0 0)">
                    <path id="Path_413" data-name="Path 413" d="M587.207,214.6a1.907,1.907,0,0,0-.589,1.067.485.485,0,0,1-.456.461c-.018,0-.034.013-.052.018a2.106,2.106,0,0,1-2.21-.483,3.684,3.684,0,0,1-.42-.547,2.188,2.188,0,0,0-1.349-1.011,1.662,1.662,0,0,0-.607.008c-.162.027-.189.143-.083.269a1.123,1.123,0,0,0,.27.241,3.135,3.135,0,0,1,1.262,1.6,2.259,2.259,0,0,0,1.068,1.173,3.11,3.11,0,0,0,1.768.31c.233-.02.465-.058.733-.092,0,.52-.007,1.023,0,1.526.006.325-.013.622-.4.732l5.959-.057a.525.525,0,0,1-.358-.584c.01-.942.019-1.883.009-2.825a2.51,2.51,0,0,0-.657-1.8c-.006-.006,0-.022,0,0,.569-.128,1.139-.222,1.688-.386a3.939,3.939,0,0,0,2.65-2.288,6.281,6.281,0,0,0,.435-2.22,4.084,4.084,0,0,0-1.006-2.976.234.234,0,0,1-.031-.19,3.784,3.784,0,0,0,.005-2.155c-.152-.55-.2-.575-.772-.461a6.484,6.484,0,0,0-2.148.958.407.407,0,0,1-.281.049,10.327,10.327,0,0,0-5,0,.384.384,0,0,1-.266-.045,6.86,6.86,0,0,0-1.847-.887,4.836,4.836,0,0,0-.807-.108.2.2,0,0,0-.161.1,3.684,3.684,0,0,0-.114,2.512.236.236,0,0,1-.052.273,3.835,3.835,0,0,0-.864,1.643,5.678,5.678,0,0,0-.028,2.261,4.254,4.254,0,0,0,1.246,2.552,4.705,4.705,0,0,0,2.233,1.125C586.382,214.457,586.784,214.517,587.207,214.6Z" transform="translate(-581.378 -203.87)" fill="#1a1a1a"/>
                    <g id="Component_207_1" data-name="Component 207 – 1" transform="translate(0 0)">
                      <path id="Path_414" data-name="Path 414" d="M587.207,214.6c-.423-.079-.825-.139-1.22-.231a4.705,4.705,0,0,1-2.233-1.125,4.254,4.254,0,0,1-1.246-2.552,5.678,5.678,0,0,1,.028-2.261,3.835,3.835,0,0,1,.864-1.643.236.236,0,0,0,.052-.273,3.684,3.684,0,0,1,.114-2.512.2.2,0,0,1,.161-.1,4.836,4.836,0,0,1,.807.108,6.86,6.86,0,0,1,1.847.887.384.384,0,0,0,.266.045,10.327,10.327,0,0,1,5,0,.407.407,0,0,0,.281-.049,6.484,6.484,0,0,1,2.148-.958c.572-.114.619-.089.772.461a3.784,3.784,0,0,1-.005,2.155.234.234,0,0,0,.031.19,4.084,4.084,0,0,1,1.006,2.976,6.281,6.281,0,0,1-.435,2.22,3.939,3.939,0,0,1-2.65,2.288c-.549.164-1.119.258-1.688.386,0-.021-.005,0,0,0a2.51,2.51,0,0,1,.657,1.8c.01.941,0,1.883-.009,2.825a.525.525,0,0,0,.358.584l-5.959.057c.384-.11.4-.407.4-.732-.01-.5,0-1.005,0-1.526-.268.034-.5.072-.733.092a3.11,3.11,0,0,1-1.768-.31,2.259,2.259,0,0,1-1.068-1.173,3.135,3.135,0,0,0-1.262-1.6,1.123,1.123,0,0,1-.27-.241c-.107-.126-.079-.243.083-.269a1.662,1.662,0,0,1,.607-.008,2.188,2.188,0,0,1,1.349,1.011,3.684,3.684,0,0,0,.42.547,2.106,2.106,0,0,0,2.21.483c.018,0,.034-.014.052-.018a.485.485,0,0,0,.456-.461A1.907,1.907,0,0,1,587.207,214.6Z" transform="translate(-581.378 -203.87)" fill="#1a1a1a"/>
                   </g>
                   </g>
                </svg>
                </a>

                {/* Behance */}
                
                {/* Whats App */}
                
                {/* Email */}
                <a href='https://dribbble.com/Deveb_co/about' target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.759 15.759">
                  <path id="dribbble" d="M18.694,18.147c-.183-.471-.378-.939-.594-1.4A20.594,20.594,0,0,1,10,17.917a7.851,7.851,0,0,0,2.27,5.494A11.536,11.536,0,0,1,18.694,18.147Zm.037-3.042A19.481,19.481,0,0,0,23.4,12.264a7.85,7.85,0,0,0-8.024-1.852,23.213,23.213,0,0,1,3.352,4.694Zm.59,1.169c.234.5.442,1.011.639,1.525a11.509,11.509,0,0,1,5.789.279c0-.066.01-.132.01-.2a7.835,7.835,0,0,0-1.5-4.617A20.746,20.746,0,0,1,19.321,16.274ZM20.4,19.05a23.279,23.279,0,0,1,1.048,5.85,7.884,7.884,0,0,0,4.163-5.488A10.161,10.161,0,0,0,20.4,19.05Zm-2.9-3.473a21.97,21.97,0,0,0-3.4-4.613A7.879,7.879,0,0,0,10.11,16.61,19.312,19.312,0,0,0,17.5,15.577Zm1.635,3.808c-.246.081-.492.163-.734.263a10.16,10.16,0,0,0-5.111,4.626,7.846,7.846,0,0,0,6.863,1.149A21.944,21.944,0,0,0,19.132,19.385Z" transform="translate(-10 -10)" fill="#1a1a1a"/>
                </svg>

                </a>
                
                <a href='https://www.behance.net/deveb' target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12.589">
                    <g id="Group_481" data-name="Group 481" transform="translate(-24.842 -486.729)">
                      <path id="Path_203" data-name="Path 203" d="M6144.4-593.873a3.422,3.422,0,0,0-.4-1.265,2.766,2.766,0,0,0-.631-.763,3.137,3.137,0,0,0-.855-.5,2.646,2.646,0,0,0-.3-.106c-.01,0-.025-.005-.027-.016s.013-.019.024-.024c.036-.018.071-.039.106-.058a3.187,3.187,0,0,0,.883-.686,2.386,2.386,0,0,0,.495-.865,2.972,2.972,0,0,0,.138-.819,4.574,4.574,0,0,0-.03-.731,2.89,2.89,0,0,0-.33-1.063,2.414,2.414,0,0,0-.613-.728,3.017,3.017,0,0,0-.867-.472,5.482,5.482,0,0,0-1.388-.281c-.19-.017-.381-.018-.572-.018h-6.142a.014.014,0,0,0-.012.005.012.012,0,0,0,0,.01v12.533a.073.073,0,0,0,0,.041h6.334c.08-.008.16,0,.24-.008.122-.006.244-.008.364-.024a6.737,6.737,0,0,0,.833-.166,4.607,4.607,0,0,0,1.03-.412,3.393,3.393,0,0,0,.984-.791,3.265,3.265,0,0,0,.52-.849,3.536,3.536,0,0,0,.248-1.23A4.433,4.433,0,0,0,6144.4-593.873Zm-7.762-6.2c0-.028,0-.045.038-.044.882,0,1.764,0,2.646,0a2.848,2.848,0,0,1,.946.146,1.234,1.234,0,0,1,.739.638,1.424,1.424,0,0,1,.125.573,1.945,1.945,0,0,1-.092.7,1.153,1.153,0,0,1-.592.662,2.031,2.031,0,0,1-.778.211c-.107.009-.213.008-.32.009h-1.209c-.486,0-.972,0-1.458,0-.037,0-.046-.01-.046-.046Q6136.644-598.645,6136.643-600.073Zm4.961,7.044a1.337,1.337,0,0,1-.807.982,2.541,2.541,0,0,1-.751.19,5.075,5.075,0,0,1-.591.025q-1.381,0-2.763,0c-.04,0-.05-.01-.05-.05,0-.56,0-1.12,0-1.679s0-1.12,0-1.68c0-.038.01-.048.049-.048h2.95a2.89,2.89,0,0,1,.887.122,1.781,1.781,0,0,1,.637.343,1.315,1.315,0,0,1,.412.7A2.432,2.432,0,0,1,6141.6-593.029Z" transform="translate(-6109.032 1089)"/>
                      <path id="Path_204" data-name="Path 204" d="M6153.759-595.539a5.272,5.272,0,0,0-.665-1.756,4.074,4.074,0,0,0-1.769-1.592,4.058,4.058,0,0,0-1.345-.356,5.429,5.429,0,0,0-1.378.037,4.4,4.4,0,0,0-1.212.373,4.353,4.353,0,0,0-1.833,1.593,4.924,4.924,0,0,0-.764,2.391,6.057,6.057,0,0,0,.073,1.428,4.849,4.849,0,0,0,.627,1.707,3.951,3.951,0,0,0,1.323,1.348,4.7,4.7,0,0,0,2.173.669,2.029,2.029,0,0,1,.22.015h.458a.073.073,0,0,1,.041-.006c.119,0,.238-.014.357-.026a4.768,4.768,0,0,0,1.326-.318,3.51,3.51,0,0,0,1.573-1.2,5.2,5.2,0,0,0,.688-1.357l.046-.139-.025,0h-2.146c-.027,0-.035.011-.042.033a.894.894,0,0,1-.12.246,2.07,2.07,0,0,1-1.155.811,2.82,2.82,0,0,1-1.514-.013,1.7,1.7,0,0,1-1.21-1.093,3.175,3.175,0,0,1-.177-.781c-.011-.1-.016-.2-.025-.3,0-.023,0-.034.029-.031a.228.228,0,0,0,.037,0h6.484c.02,0,.025-.008.026-.027,0-.036.005-.072.006-.108A6.512,6.512,0,0,0,6153.759-595.539Zm-2.445.094c-.095,0-.189,0-.284,0h-3.7c-.053,0-.053,0-.047-.051a2.472,2.472,0,0,1,.191-.763,1.823,1.823,0,0,1,1.333-1.07,2.618,2.618,0,0,1,1.213.026,1.478,1.478,0,0,1,.926.71,3.23,3.23,0,0,1,.367.967c.011.046.018.093.03.139S6151.35-595.444,6151.314-595.445Z" transform="translate(-6109.032 1089)"/>
                      <path id="Path_205" data-name="Path 205" d="M6133.874-602.267l.009,0v12.583s-.009,0-.008,0v-12.581Z" transform="translate(-6109.032 1089)"/>
                      <path id="Path_206" data-name="Path 206" d="M6149.4-600.217h-2.5c-.04,0-.05-.009-.05-.049q0-.658,0-1.317c0-.036.009-.046.046-.046h5c.039,0,.048.011.047.048q0,.659,0,1.317c0,.037-.008.047-.047.047Z" transform="translate(-6109.032 1089)"/>
                    </g>
                  </svg>
                </a>
                {/* Instagram */}
                <a href='https://www.instagram.com/deveb.co/?hl=en' target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <g id="Group_175" data-name="Group 175" transform="translate(-6133.874 642.601)">
                      <path id="Path_197" data-name="Path 197" d="M6150.944-642.6H6136.8a2.931,2.931,0,0,0-2.929,2.93v14.141a2.93,2.93,0,0,0,2.929,2.929h14.141a2.931,2.931,0,0,0,2.93-2.929v-14.141A2.932,2.932,0,0,0,6150.944-642.6Zm-7.07,15.572a5.571,5.571,0,0,1-5.572-5.572,5.572,5.572,0,0,1,5.572-5.572,5.571,5.571,0,0,1,5.571,5.572A5.571,5.571,0,0,1,6143.874-627.029Zm6.445-10.7a1.28,1.28,0,0,1-1.281-1.281,1.281,1.281,0,0,1,1.281-1.281,1.282,1.282,0,0,1,1.281,1.281A1.281,1.281,0,0,1,6150.319-637.726Z"/>
                      <circle id="Ellipse_40" data-name="Ellipse 40" cx="3.976" cy="3.976" r="3.976" transform="translate(6139.897 -636.538)"/>
                    </g>
                  </svg>
                </a>
                {/* <a href='https://wa.me/{number}' target="_blank" rel="noopener noreferrer">
                  <svg className="whats" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.878 22.91">
                    <path id="Path_320" data-name="Path 320" d="M11.212-511.543a11.458,11.458,0,0,0-4.448,1.272,11.415,11.415,0,0,0-4.981,5.084,10.11,10.11,0,0,0-.829,2.177A9.8,9.8,0,0,0,.6-500.192c0,.573.022,1.191.054,1.433a11.518,11.518,0,0,0,1.783,4.9l.323.5-.712,2.1c-.394,1.16-.708,2.11-.7,2.119s.986-.3,2.177-.676,2.182-.694,2.2-.694a3.28,3.28,0,0,1,.408.233c.206.125.636.358.954.511a11.44,11.44,0,0,0,9.174.327,11.553,11.553,0,0,0,6.863-7.75,9.556,9.556,0,0,0,.349-2.907,9.557,9.557,0,0,0-.349-2.907,11.55,11.55,0,0,0-8.534-8.274,10.733,10.733,0,0,0-2.307-.26C11.795-511.552,11.311-511.552,11.212-511.543ZM8.48-506.23a.691.691,0,0,1,.233.246c.13.238,1.223,2.858,1.254,3.02.04.2-.161.546-.6,1.048-.466.524-.564.69-.524.878a9.533,9.533,0,0,0,1.752,2.32,7.469,7.469,0,0,0,3.154,1.877c.345.022.466-.072.994-.771.237-.318.488-.636.564-.708a.642.642,0,0,1,.717-.1c.367.139,2.621,1.236,2.782,1.357l.152.112-.027.475a2.462,2.462,0,0,1-1.622,2.4c-1.075.524-1.917.511-3.561-.058a11.225,11.225,0,0,1-4.972-3.1,16.334,16.334,0,0,1-2.007-2.4,5.7,5.7,0,0,1-1.353-3.9,3.606,3.606,0,0,1,1.111-2.343,1.734,1.734,0,0,1,1.4-.439A1.627,1.627,0,0,1,8.48-506.23Z" transform="translate(-0.6 511.55)" fill="#b9b9bf"/>
                  </svg>
                </a> */}
                 

              </div>
            </div>
          :
            ''
        }
      
    </div>
  );
}
