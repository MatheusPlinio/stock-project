import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contato() {
    return (
        <div>
            <div>
            </div>
            <footer className="w-full bg-gray-800 p-6 rounded-t-lg shadow-md mt-8">
                <h1 className="text-3xl font-semibold text-white text-center m-2">Contact</h1>
                <div className="container ">
                    <ul className="text-white flex flex-wrap">
                        <li className="flex flex-wrap">
                            <Mail className="mr-2" />
                            <span className="font-medium">Email:</span>
                            <a href="mailto:mplinio13@gmail.com" className="text-blue-500 hover:underline ml-2">mplinio13@gmail.com</a>
                        </li>
                        <li className="flex flex-wrap">
                            <Phone className="mr-2" />
                            <span className="font-medium">Telefone:</span>
                            <a href="#" className="text-blue-500 hover:underline ml-2">+55 (84) 92001-1577</a>
                        </li>
                        <li className="flex flex-wrap">
                            <Linkedin className="mr-2" />
                            <span className="font-medium">LinkedIn:</span>
                            <a href="https://www.linkedin.com/in/matheus-plinio-batista/" className="text-blue-500 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                                https://www.linkedin.com/in/matheus-plinio-batista/
                            </a>
                        </li>
                        <li className="flex flex-wrap">
                            <Github />
                            <span className="font-medium">GitHub:</span>
                            <a href="https://github.com/MatheusPlinio" className="text-blue-500 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                                https://github.com/MatheusPlinio
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}