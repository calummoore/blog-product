import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import tw from 'tailwind.macro'

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='All posts' />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} css={tw`mb-12`}>
              <h3
                style={{
                  fontSize: '1.2em',
                  marginBottom: '0.5em',
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title} {node.frontmatter.week ? ` [Week ${node.frontmatter.week}]` : ''}
                </Link>
              </h3>
              <small css={tw`text-gray-500`}>{node.frontmatter.date}</small>
              <p
                css={tw`mt-2 text-lg`}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            week
          }
        }
      }
    }
  }
`
