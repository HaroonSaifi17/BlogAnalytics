const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/', async (req, res) => {
  const { query }  = req.query

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' })
  }

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
    const filtered_blogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()),
    )

    res.json(filtered_blogs).end()
  } catch (error) {
    console.error('Error during blog search:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
