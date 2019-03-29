import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Manhattan = () => (
  <Layout>
    <SEO title="Manhattan " keywords={[`gatsby`, `application`, `react`]} />
    <h1>Manhattan</h1>
    <h2>Stir and strain into 7oz rocks glass (no ice).</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>
        Add all ingredients except cherry to a shaker half-filled with ice.
      </li>
      <li>Stir with cocktail spoon 10-15 times, until contents are chilled.</li>
      <li>
        Strain into a 7 oz rocks glass (no ice), garnish with a skewered luxardo
        cherry.
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.75 oz Bourbon Whiskey (Bulleit)</li>
      <li>1 oz Sweet Vermouth</li>
      <li>2 dashes Angostura Bitters</li>
      <li>1 bamboo skewered Luxardo cherry (garnish)</li>
    </ul>
  </Layout>
)

export default Manhattan
