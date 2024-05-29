import { getServerSession } from "next-auth";
import FormSignIn from "./formSignIn";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/lib/authOptions";

export default async function Home() {

  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex justify-center items-center">
      <FormSignIn />
    </div>
  )
}