import Carousel from './Carousel'
import { heroImages } from '../data/projects'

export default function Hero() {
  return (
    <section className="hero" id="hero-section" aria-label="PrimoVera — Architectural Design and Construction Philippines">
      <Carousel images={heroImages} />
      <div className="background-overlay"></div>
      <div className="hero-text-container">
        <h1>Crafting Spaces. Managing Assets. Delivering Value.</h1>
        <p className="hero-subtitle">
          From concept to completion and beyond — we provide full-service solutions in architectural
          design, engineering, construction, and property management tailored to your vision.
        </p>
        <p>Servicing Clients Across the Philippines — From Metro Manila to Mindanao</p>
      </div>
    </section>
  )
}
