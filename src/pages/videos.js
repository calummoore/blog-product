import React from 'react'
import { graphql } from 'gatsby'
// import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Row, Col } from '../components/grid'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/Video'

function VideosIndex ({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const videos = data.allYoutubeVideo.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='All products' />
      <h2 css={tw`text-xl mt-4 mb-4 font`}>Videos</h2>
      <Row gutter={2}>
        {videos.map(({ node }) => {
          const { id, title, videoId } = node
          return (
            <Col sm={4} md={3} gutter={2} key={id} css={tw`mb-6`}>
              <Video videoId={videoId} title={title} />
            </Col>
          )
        })}
      </Row>
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
    allYoutubeVideo (sort:{ fields: publishedAt, order: DESC })  {
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
  }
`

export default VideosIndex
