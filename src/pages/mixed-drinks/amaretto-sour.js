import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AmarettoSour = () => (
  <Layout>
    <SEO title="Amaretto Sour" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Amaretto Sour</h1>
    <hr />
    <h2>Shake and strain into 9 oz glass over ice.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients to a shaker.</li>
      <li>Shake vigorously for 3 seconds.</li>
      <li>Strain into 9 oz bucket glass over ice.</li>
      <li>Garnish with orange wedge and a cherry.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.5 oz Amaretto</li>
      <li>1 oz Simple Syrup</li>
      <li>.75 oz Lemon Juice</li>
      <li>Orange wedge and 1 maraschino cherry (garnish)</li>
    </ul>
  </Layout>
)

export default AmarettoSour
