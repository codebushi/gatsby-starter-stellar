import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="CoderDojo Higashi-Sumiyoshi" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>コーダー道場って？</h2>
                  <p>
                    CoderDojoは 7 ~ 17 才をの子どもたちの楽しくプログラミングをする道場です。<br/>
                    世界に2,200の道場、日本には228以上の道場があります。<br/>
                  </p>
                  <p>
                    プログラミングが好きな子どもは無料で参加できます。
                  </p>
                </header>
                <ul className="actions">
                  <li>
                    <a href="https://coderdojo.jp/" className="button special">
                      もっとくわしく
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>サポートしてもらえる内容</h2>
              <p>
                メンターと呼ばれる大人がみんなの「やりたい」をサポートします。
              </p>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-gamepad"></span>
                <h3><a href="https://scratch.mit.edu/">スクラッチ</a></h3>
                <p>
                  ゲームやアニメーションを作ろう
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-keyboard-o"></span>
                <h3>プログラミング言語</h3>
                <p>
                  Webやスマホでのアプリ制作
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-microchip"></span>
                <h3><a href="https://microbit.org/">micro:bit</a></h3>
                <p>
                  コンピュータボードで電子工作
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>コーダー道場に参加するには</h2>
              <p>
                7 歳〜 17 歳までのプログラミング好きな子ども達が参加できます。<br/>
                子ども達といっしょに楽しみたい大人もメンターとして参加できます。
              </p>
            </header>
            <p>
              不定期開催 (2ヶ月に1回)<br/>
              当面はオンライン開催の予定
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    さんかページへ(準備中)
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>にっき</h2>
              <p>
                これから書くのでちょっとまってね
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
