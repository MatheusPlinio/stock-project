import Link from "next/link"

const AccountHeader = () => {
    return (
        <div>
            <header
                className="px-4 p-8 border-b-2 bg-white z-50"
            >
                <nav style={{ marginRight: '10%' }}>
                    <ul className="flex justify-center space-x-14 items-center">
                        <li className="hover:text-indigo-500">
                            <Link href="/account/profile">
                                Perfil
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500">
                            <Link href="/account/history-game">
                                Histórico de jogo
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500">
                            <Link href="/account/profile">
                                Transações
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500">
                            <Link href="/#">
                                Restrições
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500">
                            <Link href="/#">
                                Bloqueios do Chat
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500">
                            <Link href="/#">
                                Preferências
                            </Link>
                        </li>
                        <li className="hover:text-indigo-500">
                            <Link href="/#">
                                API
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export { AccountHeader }