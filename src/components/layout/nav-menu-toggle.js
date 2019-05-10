import React from 'react'
import cl from 'classnames'

const NavMenuToggle = ({ setLayoutState, isDrawerOpen }) => {
  const toggleDrawer = () => setLayoutState(
    state => ({
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
    })
  )

  const toggleClass = cl(
    'main-nav',
    { 'open-nav': isDrawerOpen },
    { 'white-color': isDrawerOpen },
    { 'revealed': isDrawerOpen }
    )
  const lineColor = cl({
    'white-color': isDrawerOpen
  })

  return <div className={toggleClass} onClick={toggleDrawer}>
    <div className="mobile-toggle">
      <span className={lineColor}></span>
      <span className={lineColor}></span>
      <span className={lineColor}></span>
    </div>
  </div>

}

export default NavMenuToggle
