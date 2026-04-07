import { useState, useEffect, useRef } from 'react'
import Carousel from './Carousel'
import { bannerImages, projectGroups } from '../data/projects'

function GridItem({ img, onClick }) {
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
    <div className="grid-item fade-in-item" ref={ref} onClick={() => onClick(img)}>
      <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
    </div>
  )
}

export default function Projects() {
  const [modal, setModal] = useState(null)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setModal(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('modal-open', !!modal)
    return () => document.body.classList.remove('modal-open')
  }, [modal])

  return (
    <section className="placeholder-section" id="projects-section" aria-label="Our Projects Portfolio">
      <div className="banner-image">
        <Carousel images={bannerImages} className="projects-carousel" />
        <h2>Our Projects</h2>
      </div>

      {projectGroups.map((group, gi) => (
        <div key={gi}>
          {group.projects.map((project, pi) => (
            <div key={pi}>
              <div className="image-grid">
                <div>
                  {pi === 0 && <h3>{group.category}</h3>}
                  <p><strong>Project:</strong> {project.name}</p>
                  <p><strong>Location:</strong> {project.location}</p>
                </div>
              </div>
              <div className="grid-container">
                {project.images.map((img, ii) => (
                  <GridItem key={ii} img={img} onClick={setModal} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Modal */}
      <div
        className={`modal-overlay${modal ? ' active' : ''}`}
        onClick={e => { if (e.target === e.currentTarget) setModal(null) }}
        role="dialog"
        aria-modal="true"
        aria-label={modal ? modal.alt : 'Project image'}
      >
        <button className="close-button" onClick={() => setModal(null)} aria-label="Close image">&times;</button>
        {modal && <img className="modal-content" src={modal.src} alt={modal.alt} />}
      </div>
    </section>
  )
}
