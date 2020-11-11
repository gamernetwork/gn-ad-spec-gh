# Gamer Network Ad Spec

This project uses [Gatsby.js](https://www.gatsbyjs.org/), a static site generator based on React.

## Development

### Installation

- `git clone`
- `npm install`
- `gatsby develop`

### How it works

The basic idea here is:

- Create some markdown files (`/content`)
- Query these markdown files locally using graphql (gatsby provides a query / testing environment at `http://localhost8080/___graphql`)
- For each file, render it's contents using a React component (`/components/sections`)

## Deployment

Hosted on GitHub Pages.

- `npm run deploy` will trigger a Gatsby build, which will go live.
