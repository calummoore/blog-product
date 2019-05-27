import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const LinkStyled = styled(Link)`
  margin-right: 1em;
  font-family: 'Open Sans';
`

export default function Nav () {
  return (
    <nav>
      <LinkStyled to='/'>Home</LinkStyled>
      <LinkStyled to='/why-one-product-a-week'>About</LinkStyled>
      <LinkStyled to='/products'>Products</LinkStyled>
    </nav>
  )
}
