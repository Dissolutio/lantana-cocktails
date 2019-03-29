import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SkinnyMargarita = () => (
  <Layout>
    <SEO
      title="Skinny Margarita "
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Skinny Margarita</h1>

    <h2>Shake and strain into a salted 9 oz rocks glass with fresh ice.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Salt the rim of a 9 oz bucket glass.</li>
      <li>
        Add ice and all ingredients except lime wedge to a shaker (honey last).
      </li>
      <li>Shake vigorously for 5 seconds, make sure the honey mixes in.</li>
      <li>
        Strain into 9 oz rocks glass over ice and garnish with a lime wedge.
      </li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>2 oz Tequila (512 Reposado)</li>
      <li>.5 oz Orange Liqueur (Cointreau)</li>
      <li>1 oz Lime Juice</li>
      <li>1 oz Honey</li>
      <li>Lime wedge (garnish)</li>
    </ul>
  </Layout>
)

export default SkinnyMargarita
