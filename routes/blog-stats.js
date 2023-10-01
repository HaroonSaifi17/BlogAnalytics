const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://intent-kit-16.hasura.app/api/rest/blogs',
      {
        headers: {
          'x-hasura-admin-secret':
            '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
        },
      },
    )

    if (response.status !== 200) {
      throw new Error(`API request failed with status: ${response.status}`)
    }

    const blogs = response.data.blogs
    const total_blogs = blogs.length

    let longest_title_blog = blogs[0]

    for (const blog of blogs) {
      if (blog.title.length > longest_title_blog.title.length) {
        longest_title_blog = blog
      }
    }

    const privacy_blogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes('privacy'),
    )

    const unique_titles = [...new Set(blogs.map((blog) => blog.title))]

    res.json({
      total_blogs,
      longest_title: longest_title_blog.title,
      privacy_blogs: privacy_blogs.length,
      unique_titles,
    }).end()
  } catch (error) {
    console.error('Error:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
