import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMeta = () => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)

  return {
    ...data.site.siteMetadata
  }
}
