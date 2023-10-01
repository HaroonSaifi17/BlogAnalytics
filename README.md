# Blog Analytics and Search API

This Express.js API provides blog analytics and search functionality for a third-party blog API. It calculates statistics about the retrieved blogs and allows users to search for blogs based on keywords

## Additional information

As a lightweight middleware, we've chosen not to use Lodash for this implementation, relying solely on JavaScript for the required functionality

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https//:github.com/haroonsaifi17/BlogAnalytics
   ```

2. Navigate to the project directory:

   ```bash
   cd BlogAnalytics
   ```

3. Install dependencies:

   ```bash
   npm run install
   ```

### Running the Server

Start the Express server:

   ```bash
   npm run test
   ```

### Useage
1. Retrieve Blog Statistics
To retrieve blog statistics, make a GET request to /api/blog-stats.

Example:

   ```bash
   curl http://localhost:4040/api/blog-stats
   ```

2. Search for Blogs
To search for blogs, make a GET request to /api/blog-search with a query parameter.

Example:

   ```bash
   curl http://localhost:4040/api/blog-search?query=privacy
   ```


