import React from "react"
import { Link } from 'gatsby'

import Layout from "~components/layout/layout"
// import CarouselBg from "~components/layout/carousel-bg"
// import Image from "~components/image"
// import BackGroundSection from '~components/background-section'


import "~styles/intro07.less"
import "./index.less"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <div className="page-index-wrap">
      <Header
        siteTitle="Mystery studio"
        desc="觅觉设计工作室"
        whiteBg
      />
      <section id="mastwrap" className="mastwrap slant-bottom slant-bottom-white">
        <section id="about" className="about pad-bottom white-bg">
          <div className="container">
            <div className="row">
              <article className="text-left col-md-12">
                <h1 className="main-heading"><span className="black font4">您好，我们是Mystery Studio，<em
                  className="dark font3 weight-light">可能是京城最好的独立设计工作室</em></span></h1>
              </article>
            </div>
          </div>
        </section>
        <section className="about pad-top pad-bottom white-bg super-space">
          <div className="container">
            <div className="row">
              <article className="text-left col-md-6">
                <h1 className="sub-heading"><span className="black font4">The Story.</span></h1>
                <p className="promo-text dark font2 weight-light add-top-quarter">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nunc euismod sed libero at congue. Praesent vulputate dolor velit, in
                  condimentum odio pellentesque libero.</p>
              </article>
              <article className="text-left col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod sed libero at congue. Praesent
                  vulputate dolor velit, in condimentum odio pellentesin condimentum odio pellentesque a. Nulla
                  facilisi. Aliquam in justo non libero faucique a. Nulla facilisi. Aliquam in justo non libero faucibus
                  venenatis sed et quam. Nulla rutrum non tellus in fringilla. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nunc euismod sed libero at congue.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod sed libero at congue. Praesent
                  vulputate dolor velit, in condimentum odio pellentesque a facilisi justo.</p>
              </article>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default IndexPage
