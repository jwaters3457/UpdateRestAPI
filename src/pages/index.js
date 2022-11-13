import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Home Page">
      <p>Welcome to my site!!!</p>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage