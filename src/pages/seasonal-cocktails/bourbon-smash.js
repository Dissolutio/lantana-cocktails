import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BourbonSmash = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Bourbon Smash</h1>

    <h2>Shake and strain into 9oz bucket glass over ice.</h2>
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients except lime wedge to shaker.</li>
      <li>Shake vigorously for 3 seconds.</li>
      <li>Strain into 9oz rocks glass over ice, garnish with lime wedge</li>
    </ol>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>1 oz Bourbon Whiskey (Bulleit Bourbon)</li>
      <li>1 oz Orange Liqueur (Cointreau)</li>
      <li>.75 oz Aqua Fresca Lime</li>
      <li>.75 oz Simple Syrup</li>
      <li>.25 oz Lime Juice</li>
      <li>.5 tsp Syrup (from Luxardo cherries)</li>
      <li>1 Luxardo cherry</li>
      <li>3 Mint Leaves</li>
      <li>1 Lime Wedge</li>
    </ul>
  </Layout>
)

export default BourbonSmash
