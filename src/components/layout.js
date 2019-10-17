import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import Nav from '../components/nav'
import Promo from './base/Promo'
import ProductHunt from './base/ProductHunt'

class Layout extends React.Component {
  render () {
    const { title, children } = this.props
    return (
      <>
        <ProductHunt name='Snapboard' id='snapboard-2' />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: '56rem',
          }}
        >
          <header css={tw`clearfix py-8`}>
            <h3
              style={{
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
          <main>{children}</main>
          <footer css={tw`mt-8`}>
            © {new Date().getFullYear()}
          </footer>
        </div>
        <Promo product='1productaweek' />
      </>
    )
  }
}

export default Layout
