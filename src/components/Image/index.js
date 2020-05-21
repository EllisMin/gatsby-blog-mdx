import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import config from "../../../customize"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  // Loop through all files to find file that matches with image path
  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(config.profileImageName)
  })
  if (!image) {
    return null
  }

  return (
    <Img className="img-profile" fluid={image.node.childImageSharp.fluid} />
  )
}

export default Image
