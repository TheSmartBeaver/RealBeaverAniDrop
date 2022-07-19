import { createContext, useState, useEffect } from "react"

const AppContext = createContext({
  cart: [],
  addProductToCart: (products) => {},
  categories: [],
  setCategories: (categories) => {},
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
})
export const AppProvider = (props) => {
  //Navigation

  const [categories, setCategories] = useState([])

  function setCategoriesHandler(categories) {
    setCategories(categories)
  }

  //Cart
  const [cart, setCart] = useState([])

  useEffect(() => {
    let cartData = localStorage.getItem("ani-wild-shop-cart")
    cartData = null !== cartData ? JSON.parse(cartData) : []
    setCart(cartData)
  }, [])

  function addProductToCartHandler(product) {
    setCart((prevProducts) => {
      //TODO !!!!! Eviter qu'on duplique les produits en les insérant en plusieurs temps
      return prevProducts.concat(product)
    })
  }

  function removeProductToCart(product) {
    setCart((prevProducts) => {
      //TODO !!!!!
    })
  }

  //Favorites

  const [userFavorites, setUserFavorites] = useState([])

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    cart: cart,
    setCart: addProductToCartHandler,
    categories: categories,
    setCategories: setCategoriesHandler,
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  }

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  )
}

export default AppContext
