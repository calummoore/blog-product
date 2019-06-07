import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Signup from '../components/Signup'
import githubLogo from '../img/github.png'
import openImg from '../img/open.png'
import placeholder from '../img/placeholder-icon.png'

class ProductPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { title, icon, week, website, github, toc, image } = post.frontmatter

    const tocList = toc && toc.split(',')
    const tocEl = toc && tocList.map((title, i) => {
      const href = title.toLowerCase().split(' ').join('-')
      return (
        <>
          <li key={title}><a href={`#${href}`}>{title}</a></li>
          {i < tocList.length - 1 && (
            <li key={`${title}-dash`} css={css`color: #ccc; margin-left: 0.5em; margin-right: 0.5em;`}>/</li>
          )}
        </>
      )
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={`How I built and launched ${title} in 1 week - ${post.frontmatter.description || post.excerpt}`}
          image={image && image.publicURL}
        />
        <div css={css`margin-top: 3em; margin-bottom: 2em; ${tw`max-w-2xl mx-auto`}`}>
          <Signup />
        </div>
        <div css={tw`max-w-2xl mx-auto`} className='content'>
          <h1>
            <img css={css`vertical-align: middle; margin-right: 0.3em;`} alt={title} src={(icon && icon.publicURL) || placeholder} width={60} />
            <span style={{ position: 'relative', top: 3 }}>{post.frontmatter.title}</span>
          </h1>
          <p
            style={{
              color: '#aaa',
              display: `block`,
              marginBottom: '2em',
            }}
          >
            Week { week } - {post.frontmatter.date}
          </p>

          {toc && (
            <ul css={styles.toc}>{tocEl}</ul>
          )}

          <p>{ post.frontmatter.description }</p>

          <div css={css`margin-top: 2em;`}>
            {website && (
              <a css={styles.website} target='_blank' href={`https://${website}`}>
                <img
                  css={css`vertical-align: middle; position: relative; top: -1px; margin-right: 5px;`}
                  width={14} src={openImg} alt='open' /> {website}
              </a>
            )}
            {github && (
              <a css={styles.github} target='_blank' href={github}>
                <img
                  css={css`vertical-align: middle; position: relative; top: -2px; margin-right: 5px;`}
                  width={20} src={githubLogo} alt='github' /> View on GitHub
              </a>
            )}
          </div>

          <div css={css`margin-top: 2em;`} dangerouslySetInnerHTML={{ __html: post.html }} />

          <Footer previous={previous} next={next} />
        </div>
        <div css={tw`my-10 max-w-2xl mx-auto`}>
          <Signup forceShow />
        </div>
      </Layout>
    )
  }
}

const commonBtn = `
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 0.8em 0.8em;
  color: #fff;
  font-size: 0.9em;
`

const styles = {
  website: css`
    ${commonBtn}
    ${tw`font-sans`}
    margin-right: 1em;
    border-color: #ddd;
    background: #fff;
    color: #3f51b5;
  `,
  github: css`
    ${commonBtn}
    ${tw`font-sans`}
    background: #303030;
    :hover {
      background: #103030;
    }
  `,
  toc: css`
    list-style: none;
    margin: 0 !important;
    li {
      ${tw`font-sans`}
      font-size: 1rem;
      display: inline-block;
      font-weight: 600 !important;
      a {
        font-weight: 600 !important;
      }
    }
  `,
}

export default ProductPostTemplate

export const pageQuery = graphql`
  query ProductPostBySlug($slug: String!) {
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
        week
        toc
        github
        website
        icon {
          publicURL
        }
        image {
          publicURL
        }
      }
    }
  }
`
