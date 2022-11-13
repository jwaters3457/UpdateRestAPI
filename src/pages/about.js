import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me!">
            <p1>Hello there! I'm James, a web developer, and I'm trying to communicate to a REST API with React</p1>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage