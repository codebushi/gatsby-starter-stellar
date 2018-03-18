import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">

          {children()}
          <Footer />
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
