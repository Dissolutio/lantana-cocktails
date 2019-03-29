import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const LongIslandIcedTea = () => (
  <Layout>
    <SEO
      title="Long Island Iced Tea"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Long Island Iced Tea</h1>
    <hr />
    <h2>Shake and strain into pint glass over ice.</h2>
    <hr />
    <ol>
      <h3>Steps</h3>
      <li>
        Add ice and all ingredients except coke and lemon wedge to shaker.
      </li>
      <li>Shake vigorously for 3-5 seconds.</li>
      <li>Strain into a pint glass full of ice.</li>
      <li>Top off with a splash of Coca-Cola.</li>
      <li>Top with Coca-Cola and garnish with a lemon wedge.</li>
    </ol>
    <ul>
      <h3>Ingredients</h3>
      <li>.5 oz Orange Liqueur (Cointreau)</li>
      <li>.5 oz Vodka (Tito's)</li>
      <li>.5 oz Silver Rum (Bacardi Silver)</li>
      <li>.5 oz Gin (Bombay Sapphire)</li>
      <li>2 oz Sweet & Sour</li>
      <li>splash of Coca-Cola</li>
      <li>Lemon wedge (garnish)</li>
    </ul>
  </Layout>
)

export default LongIslandIcedTea
