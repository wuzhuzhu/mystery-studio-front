import React, { useState, useEffect, useRef } from 'react'

export const useTimer = () => {
  function onclickToggle() {
    setActive(!isActive)
  }

  function onStop() {
    setCount(0)
    setActive(false)
    // console.log('停止了', ref.current)
    clearInterval(ref.current)
  }

  const [count, setCount] = useState(0)
  const [isActive, setActive] = useState(false)

  const ref = useRef()

  useEffect(() => {
    if (isActive) {
      ref.current = setInterval(() => {
        setCount(prev => prev + 1)
      }, 1000)
      // console.log('开始定时器', ref.current)
    } else {
      clearInterval(ref.current)
    }

    return () => clearInterval(ref.current)
  }, [isActive])

  return {
    count,
    isActive,
    onclickToggle,
    onStop,
  }
}

/* Usage:
function Timer() {
  const { count, isActive, onclickToggle, onStop } = useTimer()
  return (
    <div>
      <button onClick={onclickToggle}>{isActive ? '暂停' : '开'}</button>
      <button onClick={onStop}>停止</button>
      <h1>秒：{count}</h1>
    </div>
  )
}
*/
