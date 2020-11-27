import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const LinkStyled = styled(Link)`
  margin-right: 1.5em;
  ${tw`
    text-gray-700
    text-sm
  `}
`

const AStyled = styled('a')`
  margin-right: 1.5em;
  ${tw`
    text-gray-700
    text-sm
  `}
`

export default function Nav () {
  return (
    <nav>
      <LinkStyled to='/why-one-product-a-week'>About</LinkStyled>
      <LinkStyled to='/products'>Products</LinkStyled>
      <AStyled href='https://www.youtube.com/channel/UCT2lsptYf4WvBsCNBqqHAgQ'>Videos</AStyled>
      <LinkStyled to='/articles'>Articles</LinkStyled>
    </nav>
  )
}
