import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>    
    
  </Layout>
)

export default IndexPage
