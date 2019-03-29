import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Header from "./header"
import "../scss/layout.scss"

const NavBackArrow = props => (
  <AniLink className="backArrow" to="/" cover direction="right" bg="#4f3d4d">
    &#x21d0;
  </AniLink>
)
const Layout = ({ isHomepage, children }) => {
  return (
    <>
      <Header />
      <div id="pagewrap">
        <NavBackArrow />
        <main>{children}</main>
        <NavBackArrow />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
