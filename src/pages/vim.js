import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { prjData } from "../utils/projectsData.js";
import "../projects.scss";
import { gsap } from "gsap";
import Textbox from "../components/textbox/textbox.js";
import Coverimage from "../components/textbox/coverimage.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading.js"
import useLoco from '../utils/useLoco.js'
import Footer from'../components/footer.js'
import FooterMB from '../components/footermb.jsx'
import { useAppContext } from "../contexts/appcontext.js";
import Helmet from "react-helmet";

const Vimo = ()=>{
  gsap.registerPlugin(ScrollTrigger);
  const { isMobile, changePointer, changePp, resetLoco, changePT} = useAppContext();
  const el = useRef();
  const fooT= useRef();
  const q = gsap.utils.selector(el);
  const category = window.location.href.split("projects/")[1];
  useLoco(!isMobile)
  const finded = prjData.filter(
        (pr) =>
           pr.family === category
      );
      let newArr = [];
      newArr = [...finded];
   
    useEffect(() => {
  
        const q = gsap.utils.selector(el);
        // callUpd();
        changePointer({isHover: false})
    
      }, []);
      useEffect(()=>{
      
        const changeBg = (direction)=>{
          gsap.to(q(".backgr"), { 
            autoAlpha: ()=> (direction === 1? 1: 0),
            duration:1
          })
          direction === 1? changePp("Contact"): changePp("other")
        }
        
    if(!isMobile){
        
        fooT.current = gsap
        .timeline({
            // duration:10,
            
          scrollTrigger: {
            scroller: "#viewport",
            trigger: q(".footer-sec.fot"),
            start:()=> "top-=8% center-=8%",
            end: ()=> "bottom bottom",
            // markers: true,
            id:"foot",
        //     // scrub:true,
            onLeaveBack: ({direction})=> changeBg(direction),
          onEnter: ({direction})=> changeBg(direction),
          },
        })
           .to(q(".trig"),{
             autoAlpha:1,
             duration:1,
           }, "<")
    
           return()=>{
            fooT.current.kill()
            if( fooT.current.ScrollTrigger){
              fooT.current.ScrollTrigger.kill();
            }
           }
          } else if( isMobile){
            el.current.style.transform="none";
            
            fooT.current = gsap
            .timeline({
              scrollTrigger: {
                trigger: q(".footer-sec.fot"),
                start:()=> "top-=8% center-=8%",
                end: ()=> "bottom bottom",
                // markers: true,
                id:"foot",
                onLeaveBack: ({direction})=> changeBg(direction),
              onEnter: ({direction})=> changeBg(direction),
              },
            })
               .to(q(".trig"),{
                 autoAlpha:1,
                 duration:1,
               }, "<")
              
               return()=>{
                fooT.current.kill()
                if( fooT.current.ScrollTrigger){
                  fooT.current.ScrollTrigger.kill();
                }
               }
          }
      },[resetLoco, isMobile])
    return(
        <main className="single-pj" ref={el} id="viewport">
           <Helmet>
            <title>Deveb | vimcosmo </title>
            <meta name="description" content={`About how we built `} />
           </Helmet>

           {newArr.map((i) => {
        const { img, id, elements } = i;
        return (
          <>
          {/* <div key={id} className="single-pr-co">
            <img src={img.url} loading="lazy" decoding="async" />
          </div> */}
          {  
             elements.map(elem =>{
              const{type}= elem;
              if (type === "cover") {
                const {width, height, double, h2, id, align,mt}= elem
                console.log(double)
                return (
                  <Coverimage key={id} width={width} height={height} mt={mt} double={double} h2={h2} align={align}/>
                )
              } 
              else if(type === "textbox"){
                const{h1,h2,h3,pi, width, alignment, id, double, mt} = elem;
                return <Textbox key={id} h1={h1} h2={h2} h3={h3} pi={pi}  mt={mt} double={double} width={width} alignment={alignment}/>
              }
            })
          }
          </>
        );
      })}
       {
          isMobile?  <FooterMB />: <Footer /> 
        }
        </main>
    )
}
export default Vimo;