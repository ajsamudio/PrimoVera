import { useState, useEffect, useCallback } from 'react'

export default function Carousel({ images, className = '' }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent(i => (i - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [next])

  return (
    <div className={`carousel-container ${className}`}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`carousel-img${i === current ? ' active' : ''}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding={i === 0 ? 'sync' : 'async'}
        />
      ))}
      <button className="carousel-button prev" onClick={prev}>&#10094;</button>
      <button className="carousel-button next" onClick={next}>&#10095;</button>
    </div>
  )
}
