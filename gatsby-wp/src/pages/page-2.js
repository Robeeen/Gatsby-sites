import * as React from "react"
import { Link } from "gatsby"

import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"


const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
