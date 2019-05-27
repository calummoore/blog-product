import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Nav from '../components/nav'
import Promo from './base/Promo'
import ProductHunt from './base/ProductHunt'
import Signup from './Signup'

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Nav />
        </header>
      )
    } else {
      header = (
        <header css={tw`clearfix`}>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              fontSize: '1.3em',
              float: 'left',
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <div css={tw`float-right`}>
            <Nav />
          </div>
        </header>
      )
    }
    return (
      <>
        <ProductHunt name='Webframe' id='webframe' />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          <div css={css`margin-top: 3em; margin-bottom: 2em;`}>
            <Signup />
          </div>
          <main>{children}</main>
          <footer css={tw`mt-8`}>
            © {new Date().getFullYear()}
          </footer>
        </div>
        <Promo product='1productaweek' name='1ProductAWeek' href='/why-one-product-a-week' target='_self' />
      </>
    )
  }
}

export default Layout
