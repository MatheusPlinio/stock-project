'use client'
import { signOut } from "next-auth/react"

export default function LogoutButton() {

    async function handleSubmitLogout(){
        await signOut()
    }

    return (
        <div>
            <button
                onClick={handleSubmitLogout}
                type="button"
                className="bg-blueb2bit 
                               hover:bg-blueb2bithover
                               text-white font-bold py-2 px-4
                                 rounded focus:outline-none 
                                 focus:shadow-outline"
            >
                Logout
            </button>
        </div>
    )
}