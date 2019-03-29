import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Martini = () => (
  <Layout>
    <SEO
      title="Martini (Vodka or Gin)"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Martini (Vodka or Gin)</h1>
    <hr />
    <h2>Shake and strain into 7 oz rocks glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients except olives to a shaker.</li>
      <li>Shake vigorously for 3-5 seconds.</li>
      <li>Strain into 7 oz rocks glass, no ice.</li>
      <li>Garnish with 2 skewered martini olives</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.75 oz Vodka or Gin (512 Blanco Silver or Bombay Sapphire)</li>
      <li>.25 oz Dry Vermouth</li>
      <li>
        (they want it dirty?) .25 + oz Martini Olive Juice (1 oz would be very
        dirty)
      </li>
      <li>2 skewered Martini Olives (garnish)</li>
    </ul>
  </Layout>
)

export default Martini
