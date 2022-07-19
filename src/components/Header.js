import Nav from "./Nav"
import Link from "next/link"
import { SiteLogo } from "./icons"
import CartIcon from "./cart/CartIcon"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <SiteLogo />
        <Link href="/">
          <span className="header__logo-title">Wild Fashion Universe</span>
        </Link>
      </div>
      <div className="header__navigation-box">
        <Nav />
      </div>
      <div className="header__user-box">
        <CartIcon />
      </div>
    </div>
  )
}

export default Header
