import { easeInOut, easeOut, useInView } from "framer-motion";
import { useRef } from "react";

export const cardVariant = {
    hiddenTop: {
      y:-10,
      opacity:0
    },
    hiddenBot: {
      y:30,
      opacity:0
    },
    hiddenRight: {
      x:50,
      opacity:0
    },
    hiddenLeft: {
      x:-50,
      opacity:0
    },
    visibleY: {
      y:0,
      opacity:1,
      transition:{
        ease: easeOut,
        duration: 0.8
      }
    },
    visibleX: {
      x:0,
      opacity:1,
      transition:{
        ease: easeOut,
        duration: 0.8
      }
    },
    OutVisibleX: {
      x:50,
      opacity:0,
      transition:{
        ease: easeInOut,
        duration: 0.5
      }
    }  
   }

  export const useScrollAnimation = (margin: any ='-100px',once: boolean =true) => {
    const ref=useRef(null);
    const isInView = useInView(ref,{margin,once});
    return {ref,isInView}
  }