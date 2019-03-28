import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MoviehouseSangria = () => (
  <Layout>
    <SEO title="Sangria" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Sangria</h1>
    <hr />
    <h2>Muddle, build in pint glass with ice.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Muddle 3 blueberries with the ginger-lime syrup in a pint glass.</li>
      <li>
        Fill glass with ice, then add sangria mix and top with a splash of
        Sprite.
      </li>
      <li>Garnish with an orange wedge and 3 blueberries.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>6 Blueberries</li>
      <li>0.75 oz Ginger-Lime Syrup</li>
      <li>6 oz Sangria Mix</li>
      <li>0.75oz Sprite (top off)</li>
      <li>Orange wedge</li>
    </ul>
  </Layout>
)

export default MoviehouseSangria
