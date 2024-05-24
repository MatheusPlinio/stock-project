import Contato from "@/components/Contato";
import HardSkills from "@/components/HardSkills";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SoftSkills from "@/components/SoftSkills";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Start />
      <HardSkills />
      <SoftSkills />
      {/* <Projects /> */}
      <Contato />
    </div>
  )
}