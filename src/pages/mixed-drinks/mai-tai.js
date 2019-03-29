import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MaiTai = () => (
  <Layout>
    <SEO title="Mai Tai" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Mai Tai</h1>
    <hr />
    <h2>Build over ice in pint glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Fill a pint glass with ice.</li>
      <li>Add ingredients in order (add the spiced rum as a floater).</li>
      <li>Garnish with an orange wedge and float a maraschino cherry.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1 oz Coconut-flavored Rum (Malibu)</li>
      <li>3 oz Pineapple Juice</li>
      <li>2 oz Orange Juice</li>
      <li>1 oz Spiced Rum (Captain Morgan)</li>
      <li>Orange wedge, maraschino cherry (garnish)</li>
    </ul>
  </Layout>
)

export default MaiTai
