import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bgCover from "../assets/cocktails-min.jpg"

const IndexPage = () => (
  <Layout bgCover={bgCover}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul>
      <h2>Build in Glass</h2>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/stormy-weather"
        >
          Stormy Weather
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/margarita"
        >
          Margarita
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/bloody-maria"
        >
          Bloody Maria
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/bloody-mary"
        >
          Bloody Mary
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/sangria"
        >
          Sangria
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/old-fashioned"
        >
          Old Fashioned
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/seasonal-cocktails/yuzu-mojito"
        >
          Yuzu Mojito (Seasonal)
        </AniLink>
      </li>

      <h2>Shake and Pour</h2>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/ginger-mint"
        >
          Ginger Mint
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/cucumber-strawberry-mojito"
        >
          Cucumber Strawberry Mojito
        </AniLink>
      </li>

      <h2>Shake and Strain</h2>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/tequila-fresca"
        >
          Tequila Fresca
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/sidecar"
        >
          Sidecar
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/movie-mule"
        >
          Movie Mule
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/signature-cocktails/mexican-martini"
        >
          Mexican Martini
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/seasonal-cocktails/bourbon-smash"
        >
          Bourbon Smash (Seasonal)
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/seasonal-cocktails/peachy-keen"
        >
          Peachy Keen (Seasonal)
        </AniLink>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
