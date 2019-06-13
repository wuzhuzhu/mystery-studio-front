import React, { useState, useEffect, useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { useTimer } from "../utils/hooks/timer"

export default () => {
  const data = useStaticQuery(graphql`
    query {
    allMarkdownRemark(sort: { fields: [ frontmatter___date ] order: DESC} ) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          description
          slug
          date
        }
        excerpt
      }
    }
  }
    }
  `)

  return (
    <div>
      总量： { data.allMarkdownRemark.totalCount }
      <ul>
        {data.allMarkdownRemark.edges.map(
          ({ node, node: { frontmatter } }, index) =>
            <Link>
              <li
                key={`file-${index}`}>{frontmatter.title}(<small>{frontmatter.date}</small>): {node.excerpt}
              </li>
            </Link>,
        )
        }
      </ul>
    </div>
  )
}
