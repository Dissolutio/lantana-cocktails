import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TequilaFresca = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Tequila Fresca</h1>
    <hr />
    <h2>Shake and strain into pint glass over ice.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients to a shaker.</li>
      <li>Shake vigorously for 3 seconds.</li>
      <li>Strain into a pint glass over fresh ice.</li>
      <li>
        Top with strawberry fresca (if needed) and garnish with a lime wedge.
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Tequila (512 Reposado)</li>
      <li>.5 oz Orange Liqueur (Grand Marnier)</li>
      <li>.5 oz Lime Juice</li>
      <li>.5 oz Simple Syrup</li>
      <li>2+ oz Strawberry Fresca</li>
    </ul>
  </Layout>
)

export default TequilaFresca
