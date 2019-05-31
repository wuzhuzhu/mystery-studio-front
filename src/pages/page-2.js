import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header"

import Test from '../components/page-2-text'

const SecondPage = ({ data }) => (
  <Layout>
    <Header
      siteTitle="Mystery studio"
      desc="撒旦法离开家骷髅精灵"
    />
    <div className="container">
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>{data.sitePage.id}</h1>
      <Test></Test>
    </div>


  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      id 
    }
  }
`

export default SecondPage
