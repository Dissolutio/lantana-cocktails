import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PeachyKeen = () => (
  <Layout>
    <SEO title="Peachy Keen" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Peachy Keen</h1>
    <h2>Shake and strain into pint glass over ice.</h2>
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients except mint sprig to shaker.</li>
      <li>Shake vigorously for 3 seconds.</li>
      <li>
        Strain into pint glass with fresh ice, garnish with mint sprig and lime
        wedge.
      </li>
    </ol>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Tito's Vodka</li>
      <li>.25 oz Peach Puree</li>
      <li>1.5 oz Sweet & Sour</li>
      <li>1 oz Cranberry Juice</li>
      <li>Mint sprig & Lime wedge (garnish)</li>
    </ul>
  </Layout>
)

export default PeachyKeen
