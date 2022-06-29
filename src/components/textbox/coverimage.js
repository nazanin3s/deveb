import React from "react";
import "./textbox.scss"

const Coverimage = ({width, height, double, h2, align, mt, img})=>{

    return (
        <>
        { 
            double === false ? (
            <div  className={`cover-contain ${width}`} style={mt?{marginTop:"-38px"}:{}}>
               <div className={`cover ${height}`} style={{background: `url(${img})`, backgroundSize: "cover"}}>
               </div>
            </div>

              ):(
                  <div className={`double-contain ${align}`}>
                       <h2 >{h2}</h2>
                       <div className="flex-contain" >
                         <div className={`cover-contain half-w`}>
                             <div className="cover small-h" style={{background: `url(${img[0]})`, backgroundSize: "cover"}}></div>
                         </div>
                         <div className={`cover-contain  half-w`}>
                             <div className="cover small-h" style={{background: `url(${img[1]})`, backgroundSize: "cover"}}></div>
                         </div>
                       </div>
                  </div>
              )
            }
         </>
    )
}
export default Coverimage;