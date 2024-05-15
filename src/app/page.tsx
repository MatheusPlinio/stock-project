import { getServerSession } from "next-auth";
import FormSignIn from "./formSignIn";
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await getServerSession()

  if (session) {
    redirect('/profile')
  }

  return (
    <div>
      <FormSignIn />
    </div>
  )
}
