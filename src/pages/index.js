import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import SEO from '../components/SEO'

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
        <SEO
          title="プログラミングで遊ぼう！"
          meta={[
            {
              name: `google-site-verification`,
              content: `lLGvk0Yf-B-VA06uAV7bF-W7HIwYfFZaGPqgnO9nwE4`,
            },
          ]}
        />

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
                    CoderDojoは 7 ~ 17 才の子どもたちが楽しくプログラミングできる道場です。<br/>
                    世界に2,200の道場、日本には228以上の道場があります。<br/>
                  </p>
                  <p>
                    プログラミングに興味がある子どもは無料で参加できます。
                  </p>
                  <h2>CoderDojo東住吉について</h2>
                  <p>
                    大阪市東住吉区を中心に活動しています。<br/>
                    イベント開催時は東田辺周辺を予定しています。<br/>
                    お住まいは限定してませんので、ぜひ気軽に遊びに来て下さい。
                  </p>
                </header>
                <ul className="actions">
                  <li>
                    <a href="https://coderdojo.jp/" target="_blank" rel="noopener noreferrer" className="button special">
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
                <h3><a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">スクラッチ</a></h3>
                <p>
                  ゲームやアニメをプログラミング
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
                <h3><a href="https://microbit.org/" target="_blank" rel="noopener noreferrer">micro:bit</a></h3>
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
                プログラミングを好きな 7 歳〜 17 歳までの子どもが参加できます。<br/>
                子ども達といっしょに楽しみたい大人はメンターとして参加できます。
              </p>
            </header>
            <p>
              不定期開催 (2ヶ月に1回くらい)<br/>
              開催場所は東田辺周辺を予定しています<br/>
              (感染抑制のため、直近はオンライン開催(Discord)の予定です)
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="https://discord.gg/Txh3GjCJYk" target="_blank" rel="noopener noreferrer" className="button special">
                    さんかページへ(準備中)
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/Txh3GjCJYk" target="_blank" rel="noopener noreferrer" className="button">
                    Discord
                  </a>
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
                  <Link to="/generic" className="button">
                    ブログ
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
