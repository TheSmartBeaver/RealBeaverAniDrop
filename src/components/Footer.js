import { Facebook, Instagram, Twitter, Youtube } from "./icons"

const Footer = () => (
  <div className="footer bg-gray-800 p-6 text-white">
    <div className="container mx-auto">
      <div className="footer-text flex-none md:flex items-start justify-between">
        <p>Beaver & Co Company</p>
        <p className="text-gray">
          Do your shopping while learning about animals
        </p>
        <div flex="flex flex col">
          <span className="text-gray">
            Follow on social links to support the work
          </span>
          <div>
            <ul className="social-links mt-8 flex align-center self-end">
              <li>
                <a href="https://www.youtube.com/" className="fa fa-facebook">
                  <Facebook />
                </a>
              </li>
              <li className="ml-2 mt-1">
                <a href="https://www.youtube.com/">
                  <Twitter />
                </a>
              </li>
              <li className="ml-2 mt-1">
                <a
                  href="https://www.youtube.com/channel/UCUcIrmp1YQX0hhig4tKSlNQ"
                  className="fa fa-youtube"
                >
                  <Youtube />
                </a>
              </li>
              <li className="ml-2">
                <a href="https://www.youtube.com/" className="fa fa-instagram">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
