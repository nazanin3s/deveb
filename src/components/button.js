import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap, Power3 } from "gsap";

const Button = ({
  ss,
  did,
  text,
  url,
  br,
  movable = true,
  act = undefined,
  style,
  catFunction,
  active = true,
  trigger = () => {},
}) => {
  
  const el = useRef();
  const q = gsap.utils.selector(el);
 
  const [btnhover,setbtnHover] = useState(false)

  const btnmove = (e) => {
    if (!active) return;

    const q = gsap.utils.selector(el);
    const btnArea = q(".btn-mouse-area");
    const {target}= e;
    const ofTop = target.getBoundingClientRect().top;
      const ofLeft = target.getBoundingClientRect().left;
      var s = e.clientX - ofLeft;
      var o = (e.clientY - ofTop)/130;
    // setMoveBtn(true);
    // console.log(ofTop, o, e.clientY )
    gsap.to(btnArea, {
      x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 40,
      y:( o - .5) * 30,
      // x:e.clientX,
      // y: e.clientY,
      ease: "Power3.inOut",
      duration: .3,
    });

    // const { target } = e;
    // const ofTop = target.offsetTop - 40 ;
    // const ofLeft = target.offsetLeft - 40;
    // var s = e.pageX - ofLeft;
    // var o = e.pageY - ofTop;
    // gsap.to(btnArea, 0.3, {
    //   x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 40,

    //   y: ((o - 45 - target.offsetHeight / 2) / target.offsetHeight) * 30,
    //   ease: Power3.inOut,
    // });
  };

  useEffect(() => {
    const q = gsap.utils.selector(el);

    const ripple = q(".btn-more-ripple span");
    const teXt = q(".btn-more-title span");
    const btnArea = q(".btn-mouse-area");

    if (!active) {


      if (btnhover === true) {

        gsap.set(ripple, { backgroundColor: '#FF7070' })
        gsap.to(teXt, 0.4, {
          color: "#fff",
        });
        gsap.to(ripple, 0, { yPercent: -100, borderRadius: 50, autoAlpha: 1 });
        gsap.to(ripple, 0.5, {
          yPercent: 0,
          borderRadius: 0,
        });
        gsap.to(teXt, 0.5, {
          transformOrigin: "left top",
          yPercent: -145,
          skewY: -3,
        });

      } else {
        gsap.to(ripple, 0.5, {
          yPercent: 100,
          borderRadius: 50,
        });
        gsap.to(teXt, 0.5, {
          transformOrigin: "left top",
          yPercent: 0,
          skewY: 0,
        });
        gsap.to(btnArea, 0.5, {
          x: 0,
          y: 0,
        });
      }
      
    } else {

      if (btnhover === true) {
        gsap.set(ripple, { backgroundColor: '#1a1a1a' })
        gsap.to(ripple, 0, { yPercent: ()=> act? 0: -100, borderRadius: 50, autoAlpha: 1 });
        gsap.to(ripple, 0.5, {
          yPercent: 0,
          borderRadius: 0,
        });
        
        gsap.to(teXt, 0.4, {
          color: "#fff",
        });
        gsap.to(teXt, 0.5, {
          transformOrigin: "left top",
          yPercent: -130,
          skewY: -3,
        });
        br && gsap.to(q(".btn-more"),{
          borderColor: "#000",
          duration: .5,
        })
      } else if (btnhover === false) {
        gsap.to(ripple, 0.5, {
          yPercent: ()=> act? 0: 100,
          borderRadius: ()=> act? 0 :50,
        });
        gsap.to(teXt, 0.4, {
          color: ()=> act? "#fff": "#000",
        });
        gsap.to(teXt, 0.5, {
          transformOrigin: "left top",
          yPercent: 0,
          skewY: 0,
        });
        gsap.to(btnArea, 0.5, {
          x: 0,
          y: 0,
        });
        br && gsap.to(q(".btn-more"),{
          borderColor: br,
          duration: .5,
        })
      }
    

    }

  }, [btnhover,act]);

  return (
    <div
      className="btn-container"
      ref={el}
      onClick={ () => trigger() }
    >
      <div
        className={`${ movable ? 'btn-mouse-area' : '' }`}
        style={style}
        onMouseMove={(e) => btnmove(e)}
        onMouseOver={() => setbtnHover(true)}
        onMouseLeave={() => setbtnHover(false)}
        onBlur={() => setbtnHover(false)}
      >
        {url ? (
          <Link className="btn-more" to={url} style={br? {borderColor: br}:{}}>
            <span className="btn-more-title">
              <span data-text={text}>{text}</span>
            </span>
            <span className="btn-more-ripple">
              <span></span>
            </span>
          </Link>
        ) : (
          <button onClick={ () => catFunction ? catFunction(url) : ''} className={`btn-more ${ active && (act === undefined) ? 'active' : '' } ${ act ? "act" : ""}`} >
            <span className="btn-more-title">
              <span data-text={text}>{text}</span>
            </span>
            <span className="btn-more-ripple">
              <span></span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
