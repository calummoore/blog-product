import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import firebase from 'config/firebase'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Input from '../components/base/Input'
import Button from '../components/base/Button'
import Video from '../components/Video'
import ArticleItem from '../components/ArticleItem'
import { Row, Col } from '../components/grid'
import placeholder from 'img/placeholder-icon.png'

const socialBtns = [{
  name: 'Twitter',
  icon: require('img/social/twitter.png'),
  href: 'https://twitter.com/1productaweek',
}, {
  name: 'Medium',
  icon: require('img/social/medium.png'),
  href: 'https://medium.com/1productaweek',
}, {
  name: 'YouTube',
  icon: require('img/social/youtube.png'),
  href: 'https://www.youtube.com/channel/UCT2lsptYf4WvBsCNBqqHAgQ',
}, {
  name: 'GitHub',
  icon: require('img/social/github.png'),
  href: 'https://github.com/1productaweek',
}, {
  name: 'Instagram',
  icon: require('img/social/insta.png'),
  href: 'https://instagram.com/1productaweek',
}]

const updateFormValue = (setFormData, formData, prop) => (e) => setFormData({ ...formData, [prop]: e.target.value })

const ArticleSideItem = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug} css={tw`mt-6 mb-12`}>
      <h4 css={css`${tw`py-1 text-sm whitespace-no-wrap overflow-hidden`} text-overflow: ellipsis;`}>
        <Link css={tw`text-gray-800 font-semibold`} style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title} {node.frontmatter.week ? ` [Week ${node.frontmatter.week}]` : ''}
        </Link>
      </h4>
      <p
        css={tw`mt-1 text-xs text-gray-500`}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

const ProductItem = ({ node }) => {
  const { title, icon, week, description, status } = node.frontmatter
  return (
    <div key={title} css={tw`flex`}>
      <div css={css`width: 65px;`}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <img css={css`vertical-align: middle; margin-right: 0.3em;`} alt={title} src={icon ? icon.publicURL : placeholder} width={55} />
        </Link>
      </div>
      <div css={tw`ml-1 mt-2`}>
        <h4 css={tw`text-base mb-2`}>
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title} <span css={tw`ml-1 text-xs rounded bg-gray-200 text-gray-600 font-semibold py-1 px-2`}>Week {week}</span>
          </Link>
        </h4>
        <p css={tw`mt-2 text-sm text-gray-800`} dangerouslySetInnerHTML={{
          __html: description || node.excerpt,
        }} />
        {status && <p css={tw`mt-2 text-sm text-gray-800`}><span css={tw`font-semibold`}>Status: </span>{status}</p>}
      </div>
    </div>
  )
}

const Title = ({ children, to, ...props }) => {
  return (
    <div css={tw`clearfix mt-6 pb-2 border-b border-gray-200 border-solid`} {...props}>
      <h3 css={tw`float-left text-lg`}>{children}</h3>
      <div css={tw`float-right text-sm align-middle`}><Link to={to}>View all {children}</Link></div>
    </div>
  )
}

function Home ({ data, location }) {
  const [formData, setFormData] = useState({})

  const siteTitle = data.site.siteMetadata.title
  const allPages = data.allMarkdownRemark.edges
  const posts = allPages.filter(({ node }) => node.fields.type === 'blog')
  const products = allPages.filter(({ node }) => node.fields.type === 'products')
  const videos = data.allYoutubeVideo.edges

  const socialBtnsEl = socialBtns.map(({ title, icon, href }) => (
    <a css={tw`p-1`} href={href} target='_blank' rel='noreferrer noopener'>
      <img width='26px' alt={title} src={icon} />
    </a>
  ))

  const videoListEl = (videos || []).map(({ node }) => {
    const { id, title, videoId } = node
    return (
      <Col css={tw`mb-6`} gutter={2} sm={6} key={id}>
        <Video title={title} videoId={videoId} />
      </Col>
    )
  })

  const postEl = posts.map(({ node }) => (
    <div css={tw`mt-6 mb-6`}>
      <ArticleItem node={node} />
    </div>
  ))

  const postSideEl = posts.map(({ node }) => (
    <div css={tw`mt-6 mb-6`}>
      <ArticleSideItem node={node} />
    </div>
  ))

  const productsEl = products.map(({ node }) => (
    <div css={tw`mt-4 mb-6`}>
      <ProductItem node={node} />
    </div>
  ))

  const onSubscribe = async (e) => {
    e.preventDefault()
    await firebase.firestore().collection('subscribers').add({
      ...formData,
      product: '1productaweek',
      date: new Date(),
    }).catch((e) => alert(e.message))
    alert('Thank you - you\'re successfully subscribed!')
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`I'm launching 1 product every week! 😬`} />
      <div css={tw`flex px-2`}>
        <div css={styles.left}>
          <div css={css`width:100%;height:0px;position:relative;padding-bottom:56.250%;`}>
            <iframe
              title='Welcome to 1 Product a Week'
              src='https://streamable.com/s/c93sa/bbebia'
              frameBorder='0' width='100%' height='100%' allowFullScreen
              css={css`width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;`} />
          </div>
          <div css={tw`mt-12 mb-20`}>
            <Title css={tw`mt-6`} to='/products'>Products</Title>
            { productsEl }
          </div>
          <div css={tw`mt-12 mb-20`}>
            <Title css={tw`mt-6`} to='/videos'>Videos</Title>
            <Row css={css`width: 100%; margin-top: 1em;`} gutter={2}>
              { videoListEl }
            </Row>
          </div>
          <div css={tw`mt-12 mb-20`}>
            <Title css={tw`mt-6`} to='/articles'>Articles</Title>
            { postEl }
          </div>
        </div>
        <div css={styles.right} className='xs-hide'>
          <h3 css={tw`mt-2 text-2xl`}>Hello <span role='img' aria-label='Wave'>👋</span></h3>
          <p css={tw`mt-4 text-sm text-gray-600`}>I’m Calum - I’m a fellow maker and I’ve challenged myself to launch 1 product every week.</p>
          <Link css={tw`block my-4 text-sm font-semibold text-gray-800`} to='/why-one-product-a-week'>Find out why?!</Link>
          <Input
            css={tw`mt-2 text-sm`}
            placeholder='E-mail'
            type='email'
            value={formData.email || ''}
            onChange={updateFormValue(setFormData, formData, 'email')}
          />
          <Button onClick={onSubscribe} css={tw`mt-2`}>Subscribe</Button>
          <div css={tw`mt-3`}>
            {socialBtnsEl}
          </div>
          <div css={tw`text-base font-semibold`} style={{ marginTop: '7.5em' }} />
          {postSideEl}
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  left: tw`
    flex-grow
    max-w-full
  `,
  right: css`
    width: 14rem;
    border-left: 1px solid #eee;
    ${tw`
      ml-6
      pl-4
      flex-none
      border
    `}
  `,
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allYoutubeVideo (limit: 4, sort:{ fields: publishedAt, order: DESC })  {
      edges {
        node {
          id
          videoId
          title
          publishedAt(formatString: "MMMM DD, YYYY")
          description
          thumbnail {
            url
            width
            height
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            type
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            week
            week
            toc
            github
            website
            status
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`
