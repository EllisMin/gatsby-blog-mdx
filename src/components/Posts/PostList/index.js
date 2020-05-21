import React from "react"
import PostCard from "../PostCard"

const PostList = ({ posts }) => {
  let filteredPosts = posts.filter(
    post =>
      post.node.fields.slug !== "/about/" &&
      post.node.fields.slug !== "/__do-not-remove/"
  )
  return (
    <div className="posts-list">
      {filteredPosts.map(post => {
        return (
          <PostCard
            key={post.node.id}
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            path={post.node.fields.slug}
            excerpt={
              post.node.frontmatter.excerpt
                ? post.node.frontmatter.excerpt
                : post.node.excerpt
            }
            timeToRead={post.node.timeToRead}
          />
        )
      })}
    </div>
  )
}

export default PostList
