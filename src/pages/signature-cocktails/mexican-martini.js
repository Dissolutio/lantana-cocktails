import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MoviehouseMexicanMartini = () => (
  <Layout>
    <SEO
      title="Mexican Martini"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Mexican Martini</h1>
    <hr />
    <h2>Shake and strain into 9 oz salt rimmed glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Salt the rim of a 9 oz bucket glass.</li>
      <li>Add ice and all ingredients to a shaker.</li>
      <li>Shake vigorously for 20 seconds.</li>
      <li>Strain into salted glass</li>
      <li>Garnish with 2 skewered martini olives</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Tequila (512 Blanco Silver)</li>
      <li>.75 oz Orange Liqueur (Cointreau)</li>
      <li>1 oz Lime Juice</li>
      <li>1 oz Sweet'n'Sour</li>
      <li>&lt; .25 oz splash Orange Juice</li>
      <li>Martini Olives (garnish)</li>
    </ul>
  </Layout>
)

export default MoviehouseMexicanMartini
