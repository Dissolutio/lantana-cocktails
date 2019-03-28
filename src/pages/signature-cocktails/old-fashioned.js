import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MoviehouseOldFashioned = () => (
  <Layout>
    <SEO
      title="Moviehouse Old-Fashioned"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Old Fashioned</h1>
    <hr />
    <h2>Build in 7 oz lowball glass, with a large ice ball.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>
        Add an ice ball to a 7 oz glass, hit it with 3 dashes of the orange
        bitters.
      </li>
      <li>
        Add the whiskey and simple syrup, then a bamboo skewered Luxardo cherry.
      </li>
      <li>
        Add an orange twist, aim the oils at glass rim while peeling, and try to
        avoid peeling the pith (white part).
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>1 Ice Ball</li>
      <li>3 dashes orange bitters</li>
      <li>2 oz Whiskey (Rittenhouse Rye)</li>
      <li>1 oz Simple Syrup</li>
      <li>1 skewered Luxardo Cherry</li>
      <li>1 Orange twist</li>
    </ul>
  </Layout>
)

export default MoviehouseOldFashioned
