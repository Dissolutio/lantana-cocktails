import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const GingerMint = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Ginger Mint</h1>
    <hr />
    <h2>Shake and pour into pint glass.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>Add ice and all ingredients except club soda to a shaker.</li>
      <li>Shake vigorously for 3 seconds.</li>
      <li>Pour into pint glass. Top off with club soda.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li> ~ 4 Mint Leaves</li>
      <li>2 oz gin (Bombay Sapphire)</li>
      <li>1 oz Orange Liqueur (Triple-Sec)</li>
      <li>1 oz Grapefruit Juice</li>
      <li>1 oz Ginger-Lime Syrup</li>
      <li>Club Soda</li>
    </ul>
  </Layout>
)

export default GingerMint
