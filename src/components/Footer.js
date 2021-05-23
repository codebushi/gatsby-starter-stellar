import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Footer = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            subDomain
          }
        }
      }
    `
  )
  const siteUrl = site.siteMetadata.siteUrl
  const subDomain = site.siteMetadata.subDomain

  return (
    <footer id="footer">
      <section>
        <h2>ご質問やお問合せ等はこちらから</h2>
        <ul className="icons">
          <li>
            <a href="https://discord.gg/sT6K3bspqz" target="_blank" rel="noopener noreferrer" className="button">
              Discord
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/cd_hisumi`} target="_blank" rel="noopener noreferrer" className="icon fa-twitter alt">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href={`https://${subDomain}.doorkeeper.jp/contact`} target="_blank" rel="noopener noreferrer" className="icon fa-comment alt">
              <span className="label">Doorkeeper</span>
            </a>
          </li>
          <li>
            <a href={`https://github.com/${subDomain}`} target="_blank" rel="noopener noreferrer" className="icon fa-github alt">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="mailto:higashisumiyoshi.jp@coderdojo.com" target="_blank" rel="noopener noreferrer" className="icon fa-envelope alt">
              <span className="label">Mail</span>
            </a>
          </li>
        </ul>
      </section>
      <p className="copyright">
        &copy; Untitled. Design: <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a>.<br/>
        &copy; <a href="https://coderdojo-hommachi.github.io/" target="_blank" rel="noopener noreferrer">CoderDojo Osakasayama / Hommachi</a>.<br/>
        &copy; <a href={siteUrl} target="_blank" rel="noopener noreferrer">CoderDojo Higashi-Sumiyoshi</a>.<br/>
      </p>
    </footer>
  )
}

export default Footer
