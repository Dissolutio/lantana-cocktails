import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BloodyMary = () => (
  <Layout>
    <SEO title="Bloody Mary" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Bloody Mary</h1>
    <hr />
    <h2>Build over ice in salted pint glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Salt the rim of a pint glass, fill it 3/4 with ice</li>
      <li>Add ingredients in order to glass.</li>
      <li>
        Garnish with lime wedge on rim, celery stalk in the glass, and 2 martini
        olives floating.
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.25 oz Vodka (Dripping Springs)</li>
      <li>IF CUSTOMER REQUESTS "SPICY": 3 dashes Tobasco</li>
      <li>8 oz Bloody Mary Mix</li>
      <li>Lime wedge, celery stalk, 2 martini olives. (garnish)</li>
    </ul>
  </Layout>
)

export default BloodyMary
