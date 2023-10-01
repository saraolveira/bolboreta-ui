import { useState, useRef } from "react"

const BorderCard = () => {
    const borderRef = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e) => {
        if (!borderRef.current) return

        const div = borderRef.current
        const rect = div.getBoundingClientRect()

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleBlur = () => {
        setIsFocused(false)
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <div className="relative">
            <div
                className="w-96 h-44 rounded-xl bg-anakiwa-950 border-2 border-anakiwa-900 "
                onBlur={handleBlur}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></div>
            <div
                ref={borderRef}
                style={{
                    border: "2px solid #ae55f7",
                    opacity,
                    WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                }}
                className="absolute top-0 left-0 w-96 h-44 rounded-xl bg-transparent pointer-events-none border-2 border-mauve-600 opacity-0 transition-opacity duration-500"
                aria-hidden="true"
            ></div>
        </div>
    )
}

export default BorderCard
