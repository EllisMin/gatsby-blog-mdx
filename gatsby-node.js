const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    // Create slug
    const slug = createFilePath({ node, getNode, basePath: `` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(
    "src/components/Posts/PostTemplate/index.js"
  )

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              date
              excerpt
              draft
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    // console.log(JSON.stringify(res, null, 4)) ///

    // Create pages & register paths
    const edges = res.data.allMdx.edges
    edges.forEach((edge, i) => {
      const node = edge.node

      const prev = getPrevAvailableNode(edges, i + 1)
      const next = getNextAvailableNode(edges, i - 1)

      if (node.fields.slug !== "/__do-not-remove/") {
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          context: {
            slug: node.fields.slug,
            next,
            prev,
          },
        })
      }
    })
  })
}

// Get next available prev node that's not about, draft, and dummy post
const getPrevAvailableNode = (edges, index) => {
  let retVal

  for (let i = index; i < edges.length - 1; i++) {
    if (!skipNode(edges[i].node)) {
      retVal = edges[i].node
      break
    }
  }
  return retVal
}

const getNextAvailableNode = (edges, index) => {
  let retVal

  for (let i = index; i > 0; i--) {
    if (!skipNode(edges[i].node)) {
      retVal = edges[i].node
      break
    }
  }
  return retVal
}

// Skip node if it's about, draft, or dummy post
const skipNode = node => {
  return isAboutPage(node) || isDraft(node) || isDummy(node)
}

const isAboutPage = node => {
  return node.fields.slug === "/about/"
}

const isDraft = node => {
  return node.frontmatter.draft === true
}

const isDummy = node => {
  return node.frontmatter.tags && node.frontmatter.tags.includes("___dummy*")
}
