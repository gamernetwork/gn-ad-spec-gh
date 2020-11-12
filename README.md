# Gamer Network Ad Spec

This project uses [Gatsby.js](https://www.gatsbyjs.org/), a static site generator based on React.

GitHub Pages forces deployment of user/organization pages to the master branch - so what is on the master branch is what is live [here](https://ads.gamer-network.net/). The master branch contains the output of the Gatsby build process.

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

- `npm run deploy` will trigger a Gatsby build, which will be pushed to master, and go live.
