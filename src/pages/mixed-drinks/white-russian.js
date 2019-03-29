import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const WhiteRussian = () => (
  <Layout>
    <SEO title="White Russian " keywords={[`gatsby`, `application`, `react`]} />
    <h1>White Russian</h1>

    <h2>Build in 7oz rocks glass with ice.</h2>
    <ol>
      <h3>Steps</h3>
      <li>Add ingredients in order.</li>
      <li>Stir and serve.</li>
    </ol>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>1.25 oz Vodka (Tito's)</li>
      <li>.75 oz Kahlua</li>
      <li>1 Half and half creamer</li>
    </ul>
  </Layout>
)

export default WhiteRussian
