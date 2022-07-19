import CartIcon from "./cart/CartIcon"
import { useState, useContext, useEffect } from "react"
import AppContext from "../store/AppContext"

const Nav = (props) => {
  const appCtx = useContext(AppContext)

  return (
    <nav className="navigation-menu">
      <div className="navigation-menu__items">
        {appCtx.categories?.map((category) => (
          <span className="navigation-menu__item">{category.name}</span>
        ))}
      </div>
    </nav>
  )
}

export default Nav
