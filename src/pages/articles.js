import React from 'react'
import { graphql } from 'gatsby'
// import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticleItem from '../components/ArticleItem'

export function ArticlesIndex ({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const articles = data.products.edges

  return (
    <Layout title={siteTitle}>
      <SEO title='All products' />
      <h2 css={tw`text-xl mt-4 mb-4`}>Articles</h2>
      <div>
        {articles.map(({ node }) => {
          return (
            <div css={tw`mt-6 mb-12 max-w-2xl`} key={node.fields.slug}>
              <ArticleItem node={node} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    products: allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
          }
        }
      }
    }
  }
`

export default ArticlesIndex
