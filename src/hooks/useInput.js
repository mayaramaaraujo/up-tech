import { useState } from 'react'

export const useInput = (initialState) => {
  const [data, setData] = useState(initialState);

  const handleInput = (event) => {
    setData(event.target.value)
  }

  return [data, handleInput];
}