import { useState } from 'react'

export const useLocalStorage = (id, initialValue) => {
  const [liked, setLiked] = useState(() => {
    try {
      const item = window.localStorage.getItem(`liked-${id}`)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(`liked-${id}`, value)
      setLiked(value)
    } catch (e) {
      console.log(e)
    }
  }
  return { liked, setLocalStorage }
}
