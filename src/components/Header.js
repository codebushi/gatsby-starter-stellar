import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const title = "CoderDojo 東住吉"
const subTitle = "子どものプログラミング道場"

function topPageHeader() {
  return (
    <header id="header" className="alt">
      <span className="logo"><img src={logo} width="20%" /></span>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  )
}

function pageHeader() {
  return (
    <header id="header" className="alt">
      <Link to="/">
        <h1><img src={logo} width="10%" />{title}</h1>
      </Link>
    </header>
  )
}

const Header = (props) => (
  props.topPage ? topPageHeader() : pageHeader()
)

Header.defaultProps = {
  topPage: false,
}

Header.propTypes = {
  topPage: PropTypes.bool,
}

export default Header
