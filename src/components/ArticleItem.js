import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'

export default function ArticleItem ({ node }) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={node.fields.slug} css={tw`mb-12`}>
      <h4 css={tw`text-base mb-2`}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title} {node.frontmatter.week ? ` [Week ${node.frontmatter.week}]` : ''}
        </Link>
      </h4>
      <small css={tw`text-sm text-gray-500`}>{node.frontmatter.date}</small>
      <p
        css={tw`mt-2 text-sm text-gray-800`}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}
