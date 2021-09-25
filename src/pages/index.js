// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. Always most preferred</p>
      <StaticImage
        alt="This is a cat picture on the internet"
        src="../images/image1.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage