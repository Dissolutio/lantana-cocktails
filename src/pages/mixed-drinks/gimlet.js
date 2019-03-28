import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Gimlet = () => (
  <Layout>
    <SEO title="Gimlet " keywords={[`gatsby`, `application`, `react`]} />
    <h1>Gimlet</h1>
    <h2>Stir and strain into 7oz rocks glass (no ice).</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add all ingredients to a shaker half-filled with ice.</li>
      <li>Stir with cocktail spoon 10-15 times, until contents are chilled.</li>
      <li>
        Strain into a 7 oz rocks glass (no ice), garnish with a lime wedge and a
        little straw.
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Gin (Bombay Sapphire)</li>
      <li>1 oz Simple Syrup</li>
      <li>1 oz Lime Juice</li>
      <li>Lime wedge (garnish)</li>
    </ul>
  </Layout>
)

export default Gimlet
