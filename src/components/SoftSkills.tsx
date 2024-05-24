export default function SoftSkills() {
    return (
        <div>
            <div className="m-2 bg-gray-700 w-2/4 p-5 rounded-s-full ml-auto">
                <h1 className="text-3xl font-semibold text-white text-start m-2">My Soft Skills</h1>
            </div>
            <div className="flex justify-center">
                <div className="bg-gray-800 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-700 flex items-center px-4 py-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-white font-semibold">Terminal</div>
                    </div>
                    <div className="p-4 font-mono text-white overflow-y-auto">
                        <div className="relative border-r-2 border-white text-2xl break-words">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Excelente Comunicação</li>
                                <li>Trabalho em equipe</li>
                                <li>Resolução de problemas</li>
                                <li>Gestão de tempo</li>
                                <li>Adaptabilidade</li>
                                <li>Gestão Eficaz em Ambientes de Alta Pressão</li>
                                <li>Comunicação direta e clara</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}