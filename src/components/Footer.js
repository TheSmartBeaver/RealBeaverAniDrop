import { Facebook, Instagram, Twitter, Youtube } from "./icons"

const Footer = () => (
  <div className="footer">
    <p>Beaver & Co Company</p>
    <p className="text-gray">Do your shopping while learning about animals</p>
    <div>
      <span>Follow on social links to support the work</span>
      <div>
        <div className="footer__social-links-items">
          <span>
            <a href="https://www.youtube.com/" className="fa fa-facebook">
              <Facebook />
            </a>
          </span>
          <span className="ml-2 mt-1">
            <a href="https://www.youtube.com/">
              <Twitter />
            </a>
          </span>
          <span className="ml-2 mt-1">
            <a
              href="https://www.youtube.com/channel/UCUcIrmp1YQX0hhig4tKSlNQ"
              className="fa fa-youtube"
            >
              <Youtube />
            </a>
          </span>
          <span className="ml-2">
            <a href="https://www.youtube.com/" className="fa fa-instagram">
              <Instagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
