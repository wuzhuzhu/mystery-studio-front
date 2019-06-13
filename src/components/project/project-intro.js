import React from 'react'

const ProjectIntro = ({
  title,
  category,
  subCategory
                      }) => {
  return (
    <section id="intro" className="intro single-project white-bg pad-bottom">
      <div className="container">
        <div className="row">
          <article className="text-left col-md-12">

            <div className="welcome add-top-quarter">
              <h1 className="font3 black">{title}</h1>
              <h2 className="font2 dark"><span className="font2 weight-light dark">{category} / {subCategory}</span>
              </h2>
            </div>
          </article>
        </div>
        <div className="row">
          <article className="text-left col-md-12">

            <div className="btn-wrap">
              <a className="btn btn-seven btn-seven-dark" href="works-masonry.html">Live Preview</a>
            </div>

          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectIntro
