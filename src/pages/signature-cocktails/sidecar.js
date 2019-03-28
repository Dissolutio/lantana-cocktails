import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MoviehouseSidecar = () => (
  <Layout>
    <SEO title="Sidecar" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Sidecar</h1>
    <hr />
    <h2>Shake and strain into 9 oz bucket glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Sugar the rim of a 9 oz bucket glass.</li>
      <li>Add ice and all ingredients to a shaker.</li>
      <li>Shake vigorously for 20 seconds.</li>
      <li>Strain into 9 oz glass and garnish with a lemon wedge.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.5 oz Bourbon Whiskey (Bulleit Bourbon)</li>
      <li>1.5 oz Orange Liqueur (Grand Marnier)</li>
      <li>1.5 oz Lemon Juice</li>
      <li>1 oz Simple Syrup</li>
      <li>Lemon wedge (garnish)</li>
    </ul>
  </Layout>
)

export default MoviehouseSidecar
