'use client'
import { useState } from "react"

interface SkillProps {
    name: string
    progress: number
    context?: string
}

const TechSkill: React.FC<SkillProps> = ({ name, progress, context }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{name}</h2>
                {/* <span>{isOpen ? '▲' : '▼'}</span> */}
            </div>
            <div className="relative pt-2">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                        style={{ width: `${progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    ></div>
                </div>
            </div>
            {isOpen && (
                <div className="mt-2 p-2 bg-gray-100 rounded">
                    <p>{context}</p>
                </div>
            )}
        </div>
    )
}

export default TechSkill