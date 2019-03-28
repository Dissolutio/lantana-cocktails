import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const YuzuMojito = () => (
  <Layout>
    <SEO title="Yuzu Mojito " keywords={[`gatsby`, `application`, `react`]} />
    <h1>Yuzu Mojito</h1>

    <h2>Build in pint glass with ice.</h2>
    <ol>
      <h3>Steps</h3>
      <li>Add ice to pint glass, pour ingredients over in order.</li>
      <li>Garnish with lime wedge and mint sprig.</li>
    </ol>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>1 oz Yuzuri Yuzu Liqueur</li>
      <li>1 oz Cpt Morgan Coconut Rum</li>
      <li>.75 oz Simple Syrup</li>
      <li>.75 oz Lime Juice</li>
      <li>1.5 oz Club Soda</li>
      <li>1 Lime Wedge</li>
      <li>1 Mint Sprig</li>
    </ul>
  </Layout>
)

export default YuzuMojito
