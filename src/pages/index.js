import React from "react"
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button'

import Layout from "~components/layout/layout"
import Image from "~components/image"
import SEO from "~components/seo"

import "~styles/intro07.less"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="intro-07-wrap">
      <Header
        siteTitle="Mystery studio"
        desc="撒旦法离开家骷髅精灵"
      />
      <div>
        <Button variant="primary">Primary</Button>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
