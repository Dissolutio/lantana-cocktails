import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BloodyMaria = () => (
  <Layout>
    <SEO title="Bloody Maria" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Bloody Maria</h1>
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
      <li>1.25 oz Tequila reposado (512 Reposado)</li>
      <li>8 oz Bloody Mary Mix</li>
      <li> .25 oz (splash) Lime Juice</li>
      <li>&lt; .25 oz splash Orange Juice</li>
      <li>2+ oz Sweet & Sour</li>
      <li>Lime wedge, celery stalk, 2 martini olives. (garnish)</li>
    </ul>
  </Layout>
)

export default BloodyMaria
