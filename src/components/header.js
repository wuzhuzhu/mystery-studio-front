import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cl from 'classnames'

import logoImg from '~images/logo.png'

const Header = ({ siteTitle, desc, whiteBg = false }) => {
  const HeaderClass = cl('standard-header', 'visible-lg', 'standard-header-top', {
    'white-bg': whiteBg
  })
  return (
    <header id="standard-header" className={HeaderClass}>
      <div className="container">
        <div className="row">
          <article className="col-md-4 text-left">
            <img alt="seven" title="seven" className="main-logo img-responsive" src={logoImg} />
          </article>
          <article className="col-md-8 text-right slogan">
            <h5 className="black font4">{siteTitle}</h5>
            <p className="black font2"><span className="grey">{ desc }</span></p>
          </article>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
