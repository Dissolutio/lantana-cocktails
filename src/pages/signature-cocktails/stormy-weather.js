import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const StormyWeather = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Stormy Weather</h1>
    <hr />
    <h2>Build over ice in pint glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Fill a pint glass with ice.</li>
      <li>
        Gently add all ingredients in order (they should form visible layers in
        the glass).
      </li>
      <li>Top with ginger ale and garnish with a lime wedge.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>.5 oz Lime Juice</li>
      <li>.5 oz Simple Syrup</li>
      <li>2 oz Rum (Bacardi 8 aged rum)</li>
      <li>1 oz Coconut-flavored Rum (Malibu Rum)</li>
      <li>3 dashes Angostura Bitters</li>
      <li>Ginger Ale</li>
      <li>Lime wedge (garnish)</li>
    </ul>
  </Layout>
)

export default StormyWeather
