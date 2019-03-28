import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MoviehouseMargarita = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Maragrita</h1>
    <hr />
    <h2>Build over ice in pint glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Salt the rim of a pint glass, fill it with ice</li>
      <li>Add ingredients in order to glass.</li>
      <li>Garnish with lime wedge</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1.25 oz Tequila (512 Reposado)</li>
      <li>0.75 oz Orange Liqueur (Cointreau)</li>
      <li>.25 oz (splash) Lime Juice</li>
      <li>&lt; .25 oz splash Orange Juice</li>
      <li>2+ oz Sweet & Sour</li>
      <li>Lime wedge (garnish)</li>
    </ul>
  </Layout>
)

export default MoviehouseMargarita
