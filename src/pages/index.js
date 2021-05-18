import { Link } from 'gatsby'
import React from 'react'
import { Waypoint } from 'react-waypoint'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Seo from '../components/SEO'

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
        <Seo title="プログラミングで遊ぼう！" />

        <Header topPage={true} />

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
                    CoderDojoは 7才 ～ 17才の子どもたちが<br/>
                    プログラミングを楽しむクラブです。<br/>
                    プログラミングに興味がある子どもは無料で参加できます。<br/>
                  </p>
                  <p>
                    世界に2,200、日本には228以上の道場があり<br/>
                    ボランティアにより非営利で運営されています。
                  </p>
                </header>
                <ul className="actions">
                  <li>
                    <a href="https://coderdojo.jp/" target="_blank" rel="noopener noreferrer" className="button special">
                      もっとくわしく
                    </a>
                  </li>
                </ul>
                <header className="major">
                  <h2>CoderDojo 東住吉 について</h2>
                  <p>
                    大阪市東住吉区を中心に活動しています。<br/>
                    道場を開催する時は東田辺周辺の予定です。<br/>
                    お住まいは限定してませんので、ぜひ気軽に遊びに来て下さい。
                  </p>
                  <p>
                    また一緒に活動してくれるボランティアも募集中です！<br/>
                    興味のある方はぜひご連絡下さい。
                  </p>
                </header>
              </div>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>サポートしてもらえる内容</h2>
              <p>
                みんなの「つくりたい」をサポートします。
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
                小学生(7才くらい) ～ 高校生(17才くらい)で<br/>
                プログラミングに興味がある子どもは無料で参加できます。<br/>
              </p>
              <p>
                また一緒に活動してくれるボランティアも募集中です！<br/>
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  不定期開催 (2ヶ月に1回くらい)<br/>
                  開催場所は東田辺周辺を予定しています<br/>
                  <a href="https://cd-hisumi.doorkeeper.jp/events/upcoming" target="_blank" rel="noopener noreferrer" className="button special">
                    さんかページ
                  </a>
                </li>
              </ul>
              <ul className="actions">
                  ※感染抑制のため、直近はオンライン開催(Zoom)の予定です。<br/>
                  Zoomの使い方はこちらの資料をご確認下さい。<br/>
                  <a href="https://docs.google.com/presentation/d/e/2PACX-1vTuTnuBEH8X6Dyw6KrfuCkH2yeJA0_90_OkCddDAgCcChxMOfOOMReNixLVmIBkItkLKJXEG9b8hoCp/pub?loop=false&slide=id.p" target="_blank" rel="noopener noreferrer" className="button special">
                    Zoomの使い方
                  </a>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>にっき</h2>
              <p>
                案内や日記、パソコンの使い方等を書いてます。
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/tag/blog" className="button">
                    にっきをよむ
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
