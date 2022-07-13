import Head from "next/head"
import { AppProvider } from "../store/AppContext"
import Header from "./Header"
import Footer from "./Footer"
import client from "../client/ApolloClient"
import { ApolloProvider } from "@apollo/client"

const Layout = (props) => {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div>
          <Head>
            <title>Wild Fashion Universe</title>
          </Head>
          <Header />
          {props.children}
          <Footer />
        </div>
      </ApolloProvider>
    </AppProvider>
  )
}

export default Layout
