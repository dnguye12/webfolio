import { AnimatePresence, motion } from "motion/react"
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { useLocation } from "react-router"

const base = 0.5;               // seconds
const ease = [0.65, 0, 0.35, 1];

const Layer = ({ className, duration, delay = 0, onAnimationComplete }) => {
    return (
        <motion.div
            className={`fixed inset-0 z-[900] ${className}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration, ease, delay }}
            onAnimationComplete={onAnimationComplete}
        />
    )
}

const TransitionProvider = ({ children }) => {
    const location = useLocation()
    const [active, setActive] = useState(true)
    const [completedLayers, setCompletedLayers] = useState(0)

    useLayoutEffect(() => {
        setActive(true)
        setCompletedLayers(0)
    }, [location.pathname])

    const handleLayerComplete = () => {
        setCompletedLayers((prev) => {
            const newCount = prev + 1
            if (newCount === 3) {
                setActive(false)
            }
            return newCount
        })
    }

    return (
        <>
        {
active && (
    <div className="absolute w-screen h-screen top-0 left-0 bg-neutral-100 dark:bg-neutral-700 z-[100]"></div>
)
        }
            
            <AnimatePresence
                mode="wait"
            >
                {!active && (
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: base * 0.5, ease }}
                        className={`min-h-screen w-screen`}

                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && (
                    <>
                        <Layer
                            className="bg-neutral-700"
                            duration={base * 0.6}
                            onAnimationComplete={handleLayerComplete}
                        />
                        <Layer
                            className="bg-neutral-800"
                            duration={base * 0.8}
                            delay={base * 0.2}
                            onAnimationComplete={handleLayerComplete}
                        />
                        <Layer
                            className="bg-neutral-900"
                            duration={base}
                            delay={base * 0.4}
                            onAnimationComplete={handleLayerComplete}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default TransitionProvider