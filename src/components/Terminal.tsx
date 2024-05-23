'use client'
import { TerminalSquare } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface TerminalT {
    text: string;
}

const Terminal: React.FC<TerminalT> = ({ text }) => {

    const contentRef = useRef<HTMLDivElement>(null);
    const [animationClass, setAnimationClass] = useState<string>('');
    
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
            setAnimationClass('animate-slide-in');
        }
    }, [text]);

    return (
        <div>
            <div className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-700 flex items-center px-4 py-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-white font-semibold">Terminal</div>
                </div>
                <div className="p-4 font-mono text-white overflow-y-auto" style={{ maxHeight: '60vh' }} ref={contentRef}>
                    <div className="relative border-r-2 border-white text-2xl break-words">{text}</div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
