import AppContainer from "@/components/layout/AppContainer"
import Navbar from "@/components/navigation/Navbar"
import Hero from "@/components/sections/hero/Hero"
import Work from "@/components/sections/work/Work"

export default function Page() {
  return (
    <div>
      <AppContainer>
        <Navbar />
        <Hero />
        <Work />
      </AppContainer>
    </div>
  )
}
