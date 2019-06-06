import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { useTimer } from "../utils/hooks/timer"

export default () => {
  const data = useStaticQuery(graphql`
    query {
    allFile(filter: { extension: { eq: "md" }}) {
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

  return (
    <div>
      <ul>
        { data.allFile.edges.map(({ node }, index) => <li key={`file-${index}`}>{index+1}, {node.relativePath}: {node.prettySize}</li>) }
      </ul>
    </div>
  )
}
