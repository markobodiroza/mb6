import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Watches every [data-reveal] element on the page and marks it visible once
// it scrolls into view. Runs again after each client-side navigation.
export function useReveal() {
  let { asPath } = useRouter()

  useEffect(() => {
    if (!document.documentElement.classList.contains('reveal-ready')) return

    let observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    document
      .querySelectorAll('[data-reveal]:not(.is-visible)')
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [asPath])
}
