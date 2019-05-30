import React from "react"
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button'

import Layout from "~components/layout/layout"
import CarouselBg from "~components/layout/carousel-bg"
import Image from "~components/image"
import SEO from "~components/seo"
import BackGroundSection from '~components/background-section'

import "~styles/intro07.less"
import "./index.less"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="page-index-wrap">
      <Header
        siteTitle="Mystery studio"
        desc="撒旦法离开家骷髅精灵"
      />
      <CarouselBg />
      <section id="mastwrap" className="mastwrap slant-bottom slant-bottom-white">
        <Button variant="primary">Primary</Button>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </section>
    </div>
  </Layout>
)

export default IndexPage
