import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MovieMule = () => (
  <Layout>
    <SEO title="Movie Mule" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Movie Mule</h1>
    <hr />
    <h2>Shake and strain into 9 oz glass with ice, top with club soda.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients except club soda to a shaker.</li>
      <li>Shake vigorously for 3 seconds.</li>
      <li>
        Strain into 9 oz bucket glass over ice, and top off with club soda.
      </li>
      <li>Squeeze and stir in a lime wedge. </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Vodka (Dripping Springs)</li>
      <li>1 oz Ginger-Lime Syrup</li>
      <li>Club Soda</li>
      <li>Lime wedge (garnish)</li>
    </ul>
  </Layout>
)

export default MovieMule
