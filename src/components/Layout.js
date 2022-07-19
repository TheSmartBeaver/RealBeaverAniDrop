import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import client from "../client/ApolloClient"
import { ApolloProvider } from "@apollo/client"
import { useContext, useEffect } from "react"
import AppContext from "../store/AppContext"

const Layout = (props) => {
  const appCtx = useContext(AppContext)

  useEffect(() => {
    appCtx.setCategories(props.categories)
  }, [])

  return (
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>Wild Fashion Universe</title>
        </Head>
        <Header />
        <main className="main-content">{props.children}</main>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default Layout
