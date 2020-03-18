import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainCard from "../components/main-card"

const loadsPer = 15

const IndexPage = ({ data }) => {
  const [loaded, setLoaded] = useState(undefined)

  const posts = data.allMarkdownRemark.edges

  useEffect(() => {
    const curLoad = sessionStorage.getItem("curLoad") || loadsPer
    setLoaded(parseInt(curLoad))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    const lastPostLoaded = document.querySelector(
      "div.posts-list > a:last-child"
    )
    const lastPostLoadedOffset =
      lastPostLoaded.offsetTop + lastPostLoaded.clientHeight
    const pageOffset = window.pageYOffset + window.innerHeight

    if (pageOffset > lastPostLoadedOffset) {
      // Stops loading
      if (posts.length > loaded)
        setLoaded(prev => {
          sessionStorage.setItem("curLoad", prev + loadsPer)
          return prev + loadsPer
        })
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MainCard posts={posts} loads={loaded} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 180, truncate: true)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            tags
            excerpt
            draft
          }
        }
      }
    }
  }
`

export default IndexPage
