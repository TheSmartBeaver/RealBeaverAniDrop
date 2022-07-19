import { useContext } from "react"
import AppContext from "../../store/AppContext"
import Link from "next/link"

const CartIcon = () => {
  const appCtx = useContext(AppContext)
  const productsCount =
    null !== appCtx.cart && Object.keys(appCtx.cart).length
      ? appCtx.cart.totalProductsCount
      : ""
  const totalPrice =
    null !== appCtx.cart && Object.keys(appCtx.cart).length
      ? appCtx.cart.totalProductsPrice
      : ""

  return (
    <Link href="/cart">
      <a className="cart-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block m-auto"
          fill="none"
          viewBox="0 0 24 24"
          width="18"
          height="auto"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        Bag
        {productsCount ? <span className="ml-1">({productsCount})</span> : ""}
        {/*{ totalPrice ? <span>{ totalPrice }</span> : '' }*/}
      </a>
    </Link>
  )
}

export default CartIcon
