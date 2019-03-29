import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IrishCoffee = () => (
  <Layout>
    <SEO title="Irish Coffee " keywords={[`gatsby`, `application`, `react`]} />
    <h1>Irish Coffee</h1>
    <h2>Layer in 7oz glass, no ice, served alongside coffee.</h2>
    <ol>
      <h3>Steps</h3>
      <li>Pour in the Bailey's Irish Cream.</li>
      <li>Gently pour in the Jameson to layer it on top of the cream.</li>
    </ol>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>.75 oz Bailey's Irish Cream</li>
      <li>.75 oz Whiskey (Jameson Irish Whiskey)</li>
      <li>Coffee (on the side)</li>
    </ul>
  </Layout>
)

export default IrishCoffee
