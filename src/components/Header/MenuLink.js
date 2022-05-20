import React from 'react'

export default function MenuLink({ name, to, txt, linksOut, moveLinks }) {
  return (
    <a className={name} href={to} target="_blank" rel="noopener noreferrer">
      <span onMouseMove={moveLinks} onMouseLeave={linksOut}>{txt}</span>

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="none" d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/></svg> */}
    </a>
  )
}
