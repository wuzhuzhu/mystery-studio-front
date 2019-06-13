import React from 'react'

const ProjectContent = ({ html, frontmatter: { description, brief, storyLeft, storyRight } }) => {
  return (
    <section className="about pad-top pad-bottom white-bg super-space">
      <div className="container">

        <div className="row">
          <article className="text-left col-md-12">
            <h1 className="sub-heading"><span className="dark font4">{description}</span></h1>
            <p className="promo-text dark font2 weight-light add-top-quarter black">
              { brief }
            </p>
          </article>
        </div>

        <div className="row add-top-quarter">
          <article className="text-left col-md-6">
            <p>{storyLeft}</p>
          </article>
          <article className="text-left col-md-6">
            <p>{storyRight}</p>
          </article>
        </div>

        <div className="row add-top-half">

          <article className="col-md-12 text-center">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <div className="item">
                <img alt="" title="" src="http://placehold.it/1500x1000"/>
              </div>
            </div>
          </article>
        </div>


        <div className="row add-top-quarter zoom">
          <article className="col-md-6">
            <a className="venobox" data-gall="portfolio-gallery" href="http://placehold.it/1000x600">
              <img alt="" title="" className="img-responsive" src="http://placehold.it/1000x600"/>
            </a>
          </article>
          <article className="col-md-6">
            <a className="venobox" data-gall="portfolio-gallery" href="http://placehold.it/1000x600">
              <img alt="" title="" className="img-responsive" src="http://placehold.it/1000x600"/>
            </a>
          </article>
        </div>


        <div className="row add-top-quarter zoom">

          <article className="col-md-6">
            <a className="venobox" data-gall="portfolio-gallery" href="http://placehold.it/1000x600">
              <img alt="" title="" className="img-responsive" src="http://placehold.it/1000x600"/>
            </a>
          </article>
          <article className="col-md-6">
            <a className="venobox" data-gall="portfolio-gallery" href="http://placehold.it/1000x600">
              <img alt="" title="" className="img-responsive" src="http://placehold.it/1000x600"/>
            </a>
          </article>

        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  )
}

export default ProjectContent
