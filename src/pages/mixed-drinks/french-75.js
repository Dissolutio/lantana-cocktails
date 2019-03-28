import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const French75 = () => (
  <Layout>
    <SEO title="French 75 " keywords={[`gatsby`, `application`, `react`]} />
    <h1>French 75</h1>
    <h2>Shake and strain into wine glass, add champagne and lemon twist.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and the gin, juice, syrup to a shaker with ice.</li>
      <li>Shake vigorously for 3-5 seconds.</li>
      <li>
        Strain into a wine glass, add brut to bottom of M&E logo, garnish with a
        lemon twist.
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1 oz Gin (Bombay Sapphire)</li>
      <li>.5 oz Lemon Juice</li>
      <li>.5 oz Simple Syrup</li>
      <li>3 oz Brut (J. Roget)</li>
      <li>Lemon twist (garnish)</li>
    </ul>
  </Layout>
)

export default French75
