import React from 'react'
import Layout from "~components/layout/layout"
import Header from "~components/header"
import { graphql } from 'gatsby'

import ProjectIntro from '~components/project/project-intro'

const ProjectTemplate = ({ data }) => {
  const { html, frontmatter: {  title, description, category, subCategory, slug ,date }} = data.markdownRemark
  return (
    <Layout>
      <div className="single-project-wrap">
        <Header
          siteTitle="Mystery studio"
          desc="觅觉设计工作室"
          whiteBg
        />
      </div>
      <section id="mastwrap" className="mastwrap slant-bottom slant-bottom-color">
        <ProjectIntro {...data.markdownRemark.frontmatter} />
      </section>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        category
        subCategory
        slug
        date
      }
    }
  }
`

export default ProjectTemplate
