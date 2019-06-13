import React from 'react'

const ProjectPagination = () => {
  return (
    <section id="clients" className="page page-section clients color-bg">
      <div className="container">
        <div className="row">

          <article className="col-md-2 col-md-offset-3 text-center">
            <div className="aux-icon-btn-wrap">
              <a className="aux-icon-btn black font2" href="single-project.html"><span
                className="glyphicon glyphicon-arrow-left black"></span>Prev</a>
            </div>
          </article>
          <article className="col-md-2 text-center">
            <div className="aux-icon-btn-wrap">
              <a className="aux-icon-btn black font2" href="works-masonry.html"><span
                className="glyphicon glyphicon-th black"></span>All</a>
            </div>
          </article>
          <article className="col-md-2 text-center">
            <div className="aux-icon-btn-wrap">
              <a className="aux-icon-btn black font2" href="single-project.html"><span
                className="glyphicon glyphicon-arrow-right black"></span>Next</a>
            </div>
          </article>


        </div>
      </div>
    </section>
  )
}

export default ProjectPagination
