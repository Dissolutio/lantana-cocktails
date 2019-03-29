import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../scss/header.scss"
const Header = () => (
  <header id="header">
    <div className="header-container">
      <h1>
        <AniLink cover direction="right" to="/">
          Moviehouse Cocktails
        </AniLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
