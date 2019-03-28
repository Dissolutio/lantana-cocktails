import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Cosmopolitan = () => (
  <Layout>
    <SEO title="Cosmopolitan " keywords={[`gatsby`, `application`, `react`]} />
    <h1>Cosmopolitan</h1>

    <h2>Shake and strain into 7 oz rocks glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients except orange twist to a shaker.</li>
      <li>Shake vigorously for 8-10 seconds.</li>
      <li>Strain into 7 oz rocks glass and garnish with a orange twist.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.5 oz Vodka (Dripping Springs)</li>
      <li>1 oz Orange Liqueur (Cointreau)</li>
      <li>.5 oz Lime Juice</li>
      <li>.5 oz Cranberry Juice</li>
      <li>Orange twist (garnish)</li>
    </ul>
  </Layout>
)

export default Cosmopolitan
