import { useEffect, useRef } from 'react'

const services = [
  {
    icon: 'fas fa-landmark',
    title: 'Architectural Design Services',
    tagline: 'Innovative, Practical, and Tailored to Your Vision',
    items: [
      'Interior Design',
      'Swimming Pools, Commercial Kitchens, Landscaping',
      'Site Development & Planning',
    ],
    description:
      'We deliver complete architectural solutions with a focus on function, aesthetics, and compliance.',
  },
  {
    icon: 'fas fa-cogs',
    title: 'Engineering Design Services',
    tagline: 'Smart, Safe, and Seamlessly Integrated',
    items: [
      'Civil, Structural, Electrical, Mechanical',
      'Sanitary & Plumbing Systems',
      'Fire Protection & Suppression',
      'Electronic Systems (CCTV, Alarms, etc.)',
    ],
    description:
      'Our engineering designs ensure safety, efficiency, and harmony with your architectural goals.',
  },
  {
    icon: 'fas fa-building',
    title: 'Commercial & Residential Construction',
    tagline: 'Built with Precision, Delivered with Integrity',
    items: [
      'New Construction & Renovations',
      'Custom Homes & Commercial Builds',
      'Franchise & Retail Fit-Outs',
    ],
    description:
      'We manage and build structures that exceed expectations and stand the test of time.',
  },
  {
    icon: 'fas fa-city',
    title: 'Property Management',
    tagline: 'Professional Oversight for Lasting Value',
    items: [
      'Long-Term & Short-Term Rentals (Airbnb)',
      'Tenant Relations & Maintenance',
      'Bookkeeping & Financial Reporting',
    ],
    description:
      'We make property ownership effortless by managing operations, guests, and your bottom line.',
  },
]

function ServiceCard({ service }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
        else el.classList.remove('visible')
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="service-card fade-in-section" ref={ref}>
      <div className="icon-wrapper">
        <i className={service.icon}></i>
      </div>
      <h3>{service.title}</h3>
      <p>{service.tagline}</p>
      <ul>
        {service.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>{service.description}</p>
      <a href="#contact-section" className="learn-more-btn"
        onClick={e => {
          e.preventDefault()
          document.querySelector('#contact-section')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Learn More
      </a>
    </div>
  )
}

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Core Services</h2>
      <div className="services-container">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </section>
  )
}
