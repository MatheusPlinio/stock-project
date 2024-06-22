import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/lib/authOptions";

export default async function Home() {

  const session = await getServerSession(nextAuthOptions)

  return (
    <div className="flex justify-center items-center">
      
    </div>
  )
}