import Carousel from './Carousel'
import { heroImages } from '../data/projects'

export default function Hero() {
  return (
    <section className="hero">
      <Carousel images={heroImages} />
      <div className="background-overlay"></div>
      <div className="hero-text-container">
        <h1>Crafting Spaces. Managing Assets. Delivering Value.</h1>
        <h3>
          From concept to completion and beyond — we provide full-service solutions in architectural
          design, engineering, construction, and property management tailored to your vision.
        </h3>
        <p>Servicing Clients Across the Philippines - From Metro Manila to Mindanao</p>
      </div>
    </section>
  )
}
