import * as React from "react"
//import { Link } from "gatsby"

import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
//import Header from "../components/Header/Header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>    
    
  </Layout>
)

export default IndexPage
