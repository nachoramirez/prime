import { useEffect, useState } from 'react'

export const useOutsideClick = (ref, changer) => {
  useEffect(() => {
    const outsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        changer(false)
      }
    }

    window.addEventListener('click', outsideClick)

    return () => window.removeEventListener('click', outsideClick)
  }, [])
}
