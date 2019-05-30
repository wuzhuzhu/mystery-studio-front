import React, { useState, useEffect } from "react"

const CaouselBg = () => {
  const [ active, setActive ] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(active + 1);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div>
      当前激活{ active }
    </div>
  )
}

export default CaouselBg
