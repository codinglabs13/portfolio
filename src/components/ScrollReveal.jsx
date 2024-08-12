import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

const ScrollReveal = ( {children, delay = 0.25, style = null, height = null} ) => {

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
        <div ref={ref} style={{position: "relative", overflow: "hidden", height: height}}>
            <motion.div
                variants={
                    {
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }
                }
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: delay }}
                style={style}
            >
                {children}
            </motion.div>
        
        </div>

    )
}

export default ScrollReveal