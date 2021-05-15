import { useState } from 'react'

export const useInput = () => {
  const [data, setData] = useState();

  const handleInput = (event) => {
    setData(event.target.value)
  }

  return [data, handleInput];
}