import React from 'react'
import { graphql, Link } from 'gatsby'
// import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Nav from '../components/nav'
import Layout from '../components/layout'
import SEO from '../components/seo'

function ProductItem ({ title, desc }) {
  return (
    <div css={styles.container}>
      <div css={styles.header}>{ title }</div>
      <div css={styles.content}>{ desc }</div>
    </div>
  )
}

class ProductsIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const products = data.products.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='All products' />
        <div css={tw`flex flex-wrap -m-3`}>
          {products.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const desc = node.frontmatter.description
            return (
              <div css={tw`w-full sm:w-1/2 p-3`} key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <ProductItem title={title} desc={desc} />
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

const styles = {
  container: tw`
    block
    w-full
    shadow-md 
    rounded
    overflow-hidden
    border
    border-gray-300 
    border-solid
  `,
  header: tw`
    py-16
    bg-blue-600
    font-sans
    font-bold
    text-white
    text-center
    text-3xl
  `,
  content: tw`
    p-4
    leading-relaxed
    text-black
  `,
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    products: allMarkdownRemark(
      filter: { fields: { type: { eq: "products" } } }
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

export default ProductsIndex
