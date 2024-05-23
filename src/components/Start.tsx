import ProfileImage from "./ProfileImage";
import Terminal from "./Terminal";

export default function Start() {
    return (
        <div>
            <div className="m-2 bg-gray-800 w-2/4 p-5 rounded-s-full ml-auto">
                <h1 className="text-3xl font-semibold text-white text-start">About me</h1>
            </div>
            <div className="flex justify-between items-center h-screen m-5 relative">
                <div>
                    <Terminal text="Olá me chamo Matheus sou desenvolvedor Fullstack, tenho como stacks principais o PHP e o javascript, mas não sou limitado apenas a isso também possuo muito conhecimento e experiência em diversas tecnologias desde Banco de dados até designer UI/UX" />
                </div>
                <div className="absolute right-32 top-1/3 transform -translate-y-1/2">
                    <ProfileImage />
                </div>
            </div>
        </div>
    )
}