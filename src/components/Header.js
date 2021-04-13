import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" width="20%" /></span>
        <h1>CoderDojo東住吉</h1>
        <h2>子どものプログラミング道場</h2>
    </header>
)

export default Header
