import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Header from "./header"
import "../scss/layout.scss"

const NavBackArrow = props => (
  <Location>
    {({ location }) => {
      if (location.pathname === "/") {
        return null
      } else {
        return (
          <AniLink to="/" fade className="backArrow">
            &#x21d0;
          </AniLink>
        )
      }
    }}
  </Location>
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
