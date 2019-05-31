import React, { useState, useEffect } from "react"

const CaouselBg = () => {
  const [ count, setCount ] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [count])

  return (
    <div>
      当前激活{ count }
    </div>
  )
}

export default CaouselBg
