import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import HomepageLayout from "../components/homepageLayout"
import SEO from "../components/seo"
import bgCover from "../assets/cocktails-min.jpg"

const IndexPage = () => (
  <HomepageLayout>
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
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/colorado-bulldog"
        >
          Colorado Bulldog
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/white-russian"
        >
          White Russian
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/mai-tai"
        >
          Mai Tai
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/lifesaver"
        >
          Lifesaver
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/irish-coffee"
        >
          Irish Coffee
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
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/mojito"
        >
          Mojito
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
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/skinny-margarita"
        >
          Skinny Margarita
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/amaretto-sour"
        >
          Amaretto Sour
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/cosmopolitan"
        >
          Cosmopolitan
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/french-75"
        >
          French 75
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/martini"
        >
          Martini
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/long-island-iced-tea"
        >
          Long Island Iced Tea
        </AniLink>
      </li>

      <h2>Stir and Strain</h2>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/gimlet"
        >
          Gimlet
        </AniLink>
      </li>
      <li>
        <AniLink
          cover
          direction="left"
          bg={`url(${bgCover}) center / cover`}
          to="/mixed-drinks/manhattan"
        >
          Manhattan
        </AniLink>
      </li>
    </ul>
  </HomepageLayout>
)

export default IndexPage
