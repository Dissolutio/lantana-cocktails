import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../scss/layout.scss"

const HomepageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="pagewrap">
        <main>{children}</main>
      </div>
    </>
  )
}

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomepageLayout
