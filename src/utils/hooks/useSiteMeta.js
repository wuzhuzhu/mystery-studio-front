import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMeta = () => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)

  return {
    ...data.site.siteMetadata
  }
}
