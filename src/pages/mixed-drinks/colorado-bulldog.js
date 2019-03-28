import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ColoradoBulldog = () => (
  <Layout>
    <SEO
      title="Colorado Bulldog "
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Colorado Bulldog</h1>

    <h2>Build in 7oz rocks glass with ice.</h2>
    <ol>
      <h3>Steps</h3>
      <li>Add ingredients in order, top off with Coca-Cola.</li>
      <li>Stir and serve.</li>
    </ol>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Vodka (Tito's)</li>
      <li>.75 oz Kahlua</li>
      <li>1 Half and half creamer</li>
      <li>splash Coca-Cola</li>
    </ul>
  </Layout>
)

export default ColoradoBulldog
