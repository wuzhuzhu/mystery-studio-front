import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import Header from "../components/header"
import Test from '../components/page-2-text'

const SecondPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <Header
        siteTitle={title}
        desc={description}
        whiteBg
      />
      <div className="container white-bg">
        <h1>{data.site.siteMetadata.title}</h1>
        <h1>{data.sitePage.id}</h1>
        <Test></Test>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    sitePage {
      id 
    }
  }
`

export default SecondPage
