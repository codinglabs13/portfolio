import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

const ScrollRevealRightLeft = ({delay, children, move, style, height}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} style={{position: "relative", overflow: "visible", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", height: height }}>
            <motion.div
                variants={
                    {
                        hidden: { opacity: 0, y: 125, x: move === "left" ? 500 : -500 },
                        visible: { opacity: 1, y: 0, x: 0 }
                    }
                }
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: delay }}
                className='card'
                style={style}
            >
                {children}
            </motion.div>
    </div>
  )
}

export default ScrollRevealRightLeft