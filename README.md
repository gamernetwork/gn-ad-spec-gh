# Gamer Network Ad Spec

This project uses [Gatsby.js](https://www.gatsbyjs.org/), a static site generator based on React.

## Development

### Installation

- git clone
- npm install
- gatsby develop

### How it works

The basic idea here is:

- Create some markdown files (`/content`)
- Query these markdown files locally using graphql (gatsby provides a query / testing environment at `http://localhost8080/___graphql`)
- For each file, render it's contents using a React component (`/components/sections`)

## Deployment

This project is deployed / hosted by Netlify. You can view it [here](https://app.netlify.com/sites/gn-ad-spec/overview).

Any push to master will trigger a new deploy.

Any push to a branch will trigger a branch 'preview' deploy.

This is a good resource for understanding Netlify deploys https://www.netlify.com/docs/continuous-deployment/

This is a great guide to how Gatsby / Netlify work together https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/
