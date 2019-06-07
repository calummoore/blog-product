import React from 'react'
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
// import Bio from '../components/bio'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Signup from '../components/Signup'
// import { rhythm } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const image = post.frontmatter.image

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image && image.publicURL}
        />
        <div css={css`margin-top: 3em; margin-bottom: 2em; ${tw`max-w-2xl mx-auto`}`}>
          <Signup />
        </div>
        <div css={tw`max-w-2xl mx-auto`} className='content'>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              color: '#aaa',
              display: `block`,
              marginBottom: '2em',
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Footer previous={previous} next={next} />
        </div>
        <div css={tw`my-10 max-w-2xl mx-auto`}>
          <Signup forceShow />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          publicURL
        }
      }
    }
  }
`
