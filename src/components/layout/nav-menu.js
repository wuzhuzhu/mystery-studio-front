import React from 'react'

const NavMenu = () => (
  <>
    <div className="main-nav visible-lg">
      <div className="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <section className="menu-panel menu-bg fullheight">

      <div className="row">


        <article className="col-md-12 fullheight nav-list-holder">
          <div className="valign">
            <nav className="nav-item-wrap">
              <img alt="seven" title="seven" className="nav-logo img-responsive" src="images/logo.png"/>
              <ul className="main-nav-menu main-nav-menu-effect font4">
                <li className="trigger-sub-nav">
                  <a className="main-nav-link" href="#">home</a>
                  <div className="sub-nav">
                    <a href="index07.html">Showcase</a>
                    <a href="index01.html">Featured</a>
                    <a href="index08.html">Agency</a>
                    <a href="index04.html">Masonry</a>
                    <a href="index03.html">Personal</a>
                    <a href="index02.html">Fullscreen</a>
                    <a href="index05.html">Youtube BG</a>
                    <a href="index06.html">Vimeo BG</a>
                  </div>
                </li>

                <li className="trigger-sub-nav">
                  <a className="main-nav-link" href="#">agency</a>
                  <div className="sub-nav">
                    <a href="about.html">about</a>
                    <a href="services.html">services</a>
                    <a href="pricing.html">pricing</a>
                    <a href="contact.html">contact</a>
                  </div>
                </li>

                <li className="trigger-sub-nav">
                  <a className="main-nav-link" href="#">works</a>
                  <div className="sub-nav">
                    <a href="works-masonry.html">masonry</a>
                    <a href="works-grid.html">grid view</a>
                    <a href="single-project.html">single project</a>
                  </div>
                </li>


                <li className="trigger-sub-nav">
                  <a className="main-nav-link" href="#">news</a>
                  <div className="sub-nav">
                    <a href="news.html">news list</a>
                    <a href="news-post.html">news post</a>
                  </div>
                </li>

              </ul>
            </nav>

          </div>
        </article>

      </div>
    </section>
  </>
)

export default NavMenu
