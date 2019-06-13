import React from 'react'
import Layout from "~components/layout/layout"
import Header from "~components/header"
import { graphql } from 'gatsby'

import ProjectIntro from '~components/project/project-intro'
import ProjectContent from '~components/project/project-content'
import ProjectPagination from '~components/project/project-pagination'

import { useSiteMeta } from "../utils/hooks/queries/useSiteMeta"

const ProjectTemplate = ({ data }) => {
  const { html, frontmatter: {  title, description, category, subCategory, slug ,date }} = data.markdownRemark
  const { title: siteTitle, description: siteDescription } = useSiteMeta()
  return (
    <Layout>
      <div className="single-project-wrap">
        <Header
          siteTitle={siteTitle}
          desc={siteDescription}
          whiteBg
        />
      </div>
      <section id="mastwrap" className="mastwrap slant-bottom slant-bottom-color">
        <ProjectIntro {...data.markdownRemark.frontmatter} />
        <ProjectContent {...data.markdownRemark} />
        <ProjectPagination />
      </section>
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
        link
        slug
        date
        brief
        storyLeft
        storyRight
      }
    }
  }
`

export default ProjectTemplate
