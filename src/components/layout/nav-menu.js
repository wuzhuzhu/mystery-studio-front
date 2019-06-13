import React from 'react'
import { Link } from "gatsby"

import logoImg from '~images/logo.png'
import BackgroundImage from 'gatsby-background-image'

import { useMenuBgImg } from "../../utils/hooks/queries/useGatsbyImg"

const NavMenu = () => {
  const fluid = useMenuBgImg()
  return (
    <BackgroundImage
      Tag="section"
      className="menu-panel menu-bg fullheight"
      fluid={fluid}
    >
    <div className="row">
      <article className="col-md-12 fullheight nav-list-holder">
        <div className="valign">
          <nav className="nav-item-wrap">
            <img alt="seven" title="seven" className="nav-logo img-responsive" src={logoImg} />
            <ul className="main-nav-menu main-nav-menu-effect font4">
              <li className="trigger-sub-nav">
                <Link to="/">
                  <span className="main-nav-link" href="#">首页</span>
                </Link>

              </li>

              <li className="trigger-sub-nav">
                <Link to="/page-2">
                  <span className="main-nav-link" href="#">第二页</span>
                </Link>
              </li>

              <li className="trigger-sub-nav">
                <Link to="/page-2">
                  <span className="main-nav-link" href="#">其他页面</span>
                </Link>
              </li>

            </ul>
          </nav>

        </div>
      </article>

    </div>
    </BackgroundImage>
  )
}

export default NavMenu
