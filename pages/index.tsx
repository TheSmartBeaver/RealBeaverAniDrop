import type { NextPage } from 'next'
import Layout from '../src/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div>TEST</div>
    </Layout>
  )
}

export default Home

import client from "../src/client/ApolloClient"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories"

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  })
  //TODO: Ici, on va faire en sorte de transformer nos données récupérés

  let result = {
    props: {
      productCategories: data?.productCategories?.nodes
        ? data.productCategories.nodes
        : [],
      products: data?.products?.nodes ? data.products.nodes : [],
      heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes
        ? data.heroCarousel.nodes[0].children.nodes
        : [],
    },
    revalidate: 1,
  }

  console.log("result ", JSON.stringify(result, null, 2))
  return result
}
