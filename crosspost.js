const path = require('path')
const fs = require('fs')
const axios = require('axios')
const matter = require('gray-matter')

require('dotenv').config()

const template = `
---

### Hi, I'm Calum 👋

I'm a fellow maker and I've challenged myself to build and launch 1 product every week (@1productaweek). Check out [1productaweek.com](https://1productaweek.com) to find out more and follow my journey!

If you enjoyed the article please consider clapping 👏 and following😍!
`

async function postToMedium (articleName) {
  const pathToArticle = path.resolve(__dirname, './content/blog', articleName, './index.md')
  let articleContent = fs.readFileSync(pathToArticle)

  if (!articleContent) {
    throw new Error('Article does not exist!')
  }

  const { data, content } = matter(articleContent)

  await axios.post(process.env.MEDIUM_POST_URL, {
    title: data.title,
    content: `${content}${template}`,
    canonical: `https://1productaweek.com/${articleName}`,
  })
}

if (require.main === module) {
  postToMedium(process.argv[2])
}

module.exports = postToMedium
