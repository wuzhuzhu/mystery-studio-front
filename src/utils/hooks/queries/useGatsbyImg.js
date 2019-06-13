import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const useMenuBgImg = () => {
  const data = useStaticQuery(graphql`
      query MenuBg {
        image: file(relativePath: { eq: "background/menu-bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

  return {
    ...data.image.childImageSharp.fluid
  }
}
