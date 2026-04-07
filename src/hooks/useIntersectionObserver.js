import { useEffect, useRef } from 'react'

export function useIntersectionObserver(className = 'visible', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className)
        } else {
          el.classList.remove(className)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [className])

  return ref
}
