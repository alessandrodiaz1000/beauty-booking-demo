import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { BookingForm } from './components/BookingForm'
import { Reviews } from './components/Reviews'
import { WhyBookOnline } from './components/WhyBookOnline'
import { Location } from './components/Location'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="page-shell">
        <Hero />
        <Services />
        <BookingForm />
        <Reviews />
        <WhyBookOnline />
        <Location />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
