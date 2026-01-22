import AppContainer from "@/components/layout/AppContainer"
import Navbar from "@/components/navigation/Navbar"
import Hero from "@/components/sections/hero/Hero"
import Work from "@/components/sections/work/Work"
import Profile from "@/components/sections/profile"
import Services from "@/components/sections/services/Services"
import Contact from "@/components/sections/contact/Contact"

export default function Page() {
  return (
    <div>
      <AppContainer>
        <Navbar />
        <Hero />
        <Work />
        <Profile />
        <Services />
        <Contact />
      </AppContainer>
    </div>
  )
}
