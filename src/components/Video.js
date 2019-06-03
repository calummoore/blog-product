import React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export default function Video ({ videoId, title }) {
  return (
    <div>
      <div className='videoWrapper'>
        <iframe
          width='100%'
          title={title}
          src={`https://www.youtube.com/embed/${videoId}`} frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
      <h4 css={css`${tw`py-2 whitespace-no-wrap overflow-hidden font-semibold`} text-overflow: ellipsis;`}>{title}</h4>
    </div>
  )
}
