import Analytics from "./Components/Analytics/Analytics"
import Cards from "./Components/Cards/Cards"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Nav from "./Components/NavBar/Nav"
import NewSletter from "./Components/NewSletter/NewSletter"

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Analytics />
      <NewSletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
