import AppContainer from "@/components/layout/AppContainer"
import Navbar from "@/components/navigation/Navbar"
import Hero from "@/components/sections/hero/hero"


export default function Page() {
  return (
    <div>
      <AppContainer>
        <Navbar />
        <Hero></Hero>
      </AppContainer>
    </div>

  )
}
