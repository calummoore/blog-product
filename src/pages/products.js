import React from 'react'
import { graphql, Link } from 'gatsby'
// import styled from '@emotion/styled'
import tw from 'tailwind.macro'
// import Nav from '../components/nav'
import Layout from '../components/layout'
import SEO from '../components/seo'
import placeholder from '../img/placeholder-icon.png'

function ProductItem ({ title, desc, icon }) {
  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <div css={tw`mb-2`}>
          <img src={(icon && icon.publicURL) || placeholder} alt='Icon' width={60} />
        </div>
        { title }
      </div>
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
            const { description, icon } = node.frontmatter
            return (
              <div css={tw`w-full sm:w-1/3 p-3`} key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <ProductItem title={title} desc={description} icon={icon} />
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
    py-12
    font-sans
    font-bold
    text-gray-700
    text-center
    text-3xl
    border-b
    border-solid
    border-gray-300
  `,
  content: tw`
    p-4
    leading-relaxed
    text-gray-800
    text-sm
    h-24
    bg-gray-100
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
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default ProductsIndex
