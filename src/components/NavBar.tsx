'use client'

export default function NavBar() {
    return (
        <div>
            <nav className="bg-gray-700  p-4 shadow-lg">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="hidden md:flex space-x-4 ">
                        <h2 className="text-3xl  text-white text-start">Portfolio</h2>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}