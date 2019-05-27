import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'

export default function Footer ({ previous, next }) {
  return (
    <div>
      <div css={tw`mt-32 mb-6 border-t border-solid border-gray-300 `} />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel='prev'>
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel='next'>
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </div>
  )
}
