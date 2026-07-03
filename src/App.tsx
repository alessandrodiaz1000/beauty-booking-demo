import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { BookingPreview } from './components/BookingPreview'
import { Reviews } from './components/Reviews'
import { Reminders } from './components/Reminders'
import { GoogleProfile } from './components/GoogleProfile'
import { MonthlyReport } from './components/MonthlyReport'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="page-shell">
        <Hero />
        <Services />
        <BookingPreview />
        <Reviews />
        <Reminders />
        <GoogleProfile />
        <MonthlyReport />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
