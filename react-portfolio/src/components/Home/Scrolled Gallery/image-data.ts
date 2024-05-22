// import './index.scss';
// import LogoJ from "../../../assets/images/logo-j.png"
// import { useRef, useEffect } from 'react'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'

// const Gallery = () => {

//     const bgRef = useRef();
//     const outlineLogoRef = useRef();
//     const solidLogoRef = useRef();

//     useEffect(() => {
//         gsap.registerPlugin(DrawSVGPlugin)
        
//         gsap.timeline()
//         .to(bgRef.current, {
//             duration: 1,
//             opacity: 1,
//         })
//         .from(outlineLogoRef.current, {
//             drawSVG: 0,
//             duration: 20,
//         })

//         gsap.fromTo(solidLogoRef.current, {
//                 opacity: 0,
//             }, {
//                     opacity: 1,
//                     delay: 4, 
//                     duration: 4,
//                 }
//             )
//     },[])


//     return (
//         <div className = "logo-container" ref = {bgRef}>
//             <img ref = {solidLogoRef}className = "solid-logo" src={LogoJ} alt = "J" />
//             <svg 
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"  
//                 width="400" 
//                 height="304.3478260869565" 
//                 viewBox="0, 0, 400,304.3478260869565">
                
//                 <g 
//                 id="svgg"
//                 >
//                 <path 
//                 id="path0" 
//                 ref = {outlineLogoRef}
//                 fill="#789064" fill-rule="evenodd"
//                     />
//                 </g>
//             </svg>
//         </div>
//     )
// }
// export default Logo