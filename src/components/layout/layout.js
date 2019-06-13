/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import SEO from "~components/seo"

import Drawer from 'react-motion-drawer';

import "./layout.less"
import "~styles/intro07.less"
import "~styles/main.css"
import "~styles/main-bg.css"
import "~styles/navmenu.less"
import "~styles/main-responsive.css"
import "~styles/color.less"
import ZINDEX_MAP from '~config/constants/z-index'
// 英文字体不适用
import "~styles/fonts.less"

import StickyFrame from './sticky-frame'
// 左侧伸缩导航菜单
import NavMenu from './nav-menu'
import NavMenuToggle from './nav-menu-toggle'

const Layout = ({ children }) => {
  const [ { isDrawerOpen } , setState ] = useState({
    isDrawerOpen: false
  })
  const onDrawerChange = (e) => {
    setState(
      state => ({
        ...state,
        isDrawerOpen: e
      })
    )
  }
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <StickyFrame />
        <NavMenuToggle
          style={{ zIndex: ZINDEX_MAP['drawer-toggle'] }}
          setLayoutState={setState}
          isDrawerOpen={isDrawerOpen}
        />

        <Drawer
          open={isDrawerOpen}
          zIndex={ZINDEX_MAP['drawer']}
          onChange={onDrawerChange}
          width={400}
        >
          <NavMenu />
        </Drawer>
        <main id="page-content-wrapper">
          <div className="page-background-container">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
