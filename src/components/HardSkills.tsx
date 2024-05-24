import Image from "next/image";
import TechSkill from "./TechSkill";

export default function HardSkills() {
    return (
        <div className="flex flex-col text-center">
            <div className="m-2 bg-gray-700 w-2/4 p-5 rounded-e-full">
                <h1 className="text-3xl font-semibold text-white text-end m-2">My Hard Skills</h1>
            </div>
            <div className="flex justify-center">
                <div className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden m-2">
                    <div className="bg-gray-700 flex items-center px-4 py-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-white font-semibold">Front-End</div>
                    </div>
                    <div className="p-4 font-mono text-white overflow-y-auto">
                        <div className="text-2xl">
                            <div className="flex justify-center items-center m-2">
                                <div>
                                    <Image
                                        alt="js icone"
                                        src="/js-icon.png"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div>
                                    Javascript
                                </div>
                            </div>
                            <div className="flex justify-center items-center m-2">
                                <div>
                                    <Image
                                        alt="typescript icone"
                                        src="/typescript-icon.png"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div>
                                    Typescript
                                </div>
                            </div>
                            <div className="flex justify-center items-center m-4">
                                <div className="mr-5">
                                    <Image
                                        alt="nextjs icone"
                                        src="/next-js-icon.svg"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div className="mr-10">
                                    Nextjs
                                </div>
                            </div>
                            <div className="flex justify-center items-center m-4">
                                <div className="mr-4">
                                    <Image
                                        alt="tailwind css icone"
                                        src="/tailwind-css.svg"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div className="mr-6">
                                    Tailwind
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden m-2">
                    <div className="bg-gray-700 flex items-center px-4 py-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-white font-semibold">Back-End</div>
                    </div>
                    <div className="p-4 font-mono text-white overflow-y-auto">
                        <div className="text-2xl">
                            <div className="flex justify-center items-center">
                                <div className="mr-12">
                                    <Image
                                        alt="php icone"
                                        src="/php-icon.png"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div className="mr-10">PHP</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="mr-8">
                                    <Image
                                        alt="python icone"
                                        src="/python.svg"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div className="mr-4">Python</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="ml-16 mr-5 mb-5 mt-5">
                                    <Image
                                        alt="Django Rest icone"
                                        src="/django.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="ml-6">Django Rest</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="ml-6">
                                    <Image
                                        alt="Laravel icone"
                                        src="/laravel.png"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="ml-10">Laravel</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="mr-2">
                                    <Image
                                        alt="nodejs icone"
                                        src="/node-js.svg"
                                        width={125}
                                        height={125}
                                    />
                                </div>
                                <div className="mr-8">NodeJS</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <Image
                                        alt="docker icone"
                                        src="/docker-mark.png"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="ml-5">Docker</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden m-2">
                    <div className="bg-gray-700 flex items-center px-4 py-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-white font-semibold">DataBase</div>
                    </div>
                    <div className="p-4 font-mono text-white overflow-y-auto">
                        <div className="text-2xl">
                            <div className="flex justify-center items-center">
                                <div className="mr-16">
                                    <Image
                                        alt="icone Mysql"
                                        src="/mysql-icon.png"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div>MySQL</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <Image
                                        alt="icone PostgreSQL"
                                        src="/PostgreSQL.svg"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>PostgreSQL</div>
                            </div>
                            <div className="flex justify-center items-center mb-4">
                                <div className="ml-5">
                                    <Image
                                        alt="icone SQL server"
                                        src="/sql.svg"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className="ml-5">SQL Server</div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="mr-10">
                                    <Image
                                        alt="icone Power BI"
                                        src="/powerbi.svg"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div>Power BI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}