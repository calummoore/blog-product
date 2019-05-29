import React from 'react'
import { css } from '@emotion/core'

function ProductHunt ({ name, id }) {
  return (
    <a
      css={styles.container}
      href={`https://www.producthunt.com/posts/${id}`}
      target='_blank' rel='noopener noreferrer'>
      <div>
        <div className='title'>{name} is trending on ProductHunt!</div>
        <div className='desc xs-hide sm-hide'>Please check us out over there and don't forget to…
          <span
            css={css`font-size: 1.4em; line-height: 7px; position: relative; top: 4px; margin-left: 0.3em;`}
            role='img'
            aria-label='wink'>😉</span>
        </div>
      </div>
      <a href='#'>View</a>
    </a>
  )
}

const styles = {
  container: css`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    padding: 0.9em 1.1em;
    background: #da552f;
    color: #fff;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    div {
      display: flex;
      flex: 1 0 auto;
      div.title {
        flex: 0 0 auto;
        margin: 0;
        font-size: 16px;
        line-height: 1;
        font-weight: 600;
      }
      div.desc {
        margin: 0;
        margin-left: 1em;
        opacity: 0.9;
        font-size: 16px;
        line-height: 1;
        position: relative;
      }
    }
    a {
      display: block;
      color: #fff;
      opacity: 0.9;
    }
  `,
}

export default ProductHunt
