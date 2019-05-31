import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query {
    allFile(filter: { extension: { eq: "jpg" }}) {
    edges {
      node {
				relativePath
        prettySize
        parent {
          id
        }
        extension
        birthTime
      }
    }
  }
    }
  `)

  console.log(data)

  return (
    <div>
      test
    </div>
  )
}
