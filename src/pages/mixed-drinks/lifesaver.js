import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Lifesaver = () => (
  <Layout>
    <SEO title="Lifesaver" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Lifesaver</h1>
    <hr />
    <h2>Pour schnapps, then prosecco into wine glass.</h2>
    <hr />
    <ul>
      <h3>Ingredients</h3>
      <li>6-7 oz Presecco (1 split of Lunetta)</li>
      <li>1 oz Peach Schnapps</li>
    </ul>
    <h3>Explanation</h3>
    <p>
      This drink appears to be based on a Bellini, which involves peach puree,
      fruit, prosecco.
    </p>
    <p>
      There is also a Tropical Lifesaver cocktail based on coconut rum,
      pineapple juice, and melon liqueur.
    </p>
  </Layout>
)

export default Lifesaver
