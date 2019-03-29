import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Mojito = () => (
  <Layout>
    <SEO title="Mojito" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Mojito</h1>
    <hr />
    <h2>Slap mint, shake, and pour into pint glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Slap the mint leaves to release some of their oils.</li>
      <li>Add ice and all ingredients to a shaker.</li>
      <li>Shake vigorously for 5-7 seconds.</li>
      <li>Pour into pint glass. Add ice if needed.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>~ 6 medium Mint Leaves</li>
      <li>.5 oz Simple Syrup</li>
      <li>1 oz Lime Juice</li>
      <li>1.25 oz Silver Rum (Bacardi)</li>
    </ul>
  </Layout>
)

export default Mojito
