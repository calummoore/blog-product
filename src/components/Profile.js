import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Profile ({ author, imgStyle = {}, style = {}, ...props }) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              minWidth: 80,
              borderRadius: `100%`,
              ...style,
            }}
            imgStyle={{
              borderRadius: `50%`,
              ...imgStyle,
            }}
            {...props}
          />
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query ProfileQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Profile
