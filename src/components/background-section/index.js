import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackGroundImage from 'gatsby-background-image'
import './index.less'

const BackGroundSection = () => {
  const data = useStaticQuery(graphql`
    query {
        backgroundImg: file(relativePath: { eq: "background/index-bg-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
  `)

  const imgData = data.backgroundImg.fluid

  return (
    <section>
      sfjlj
      <BackGroundImage
        Tag="section"
        fluid={imgData}
      >
        <h1>Hello gatsby-background-image</h1>
      </BackGroundImage>
    </section>
  )
}

export default BackGroundSection
