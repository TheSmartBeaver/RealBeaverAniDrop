import { gql } from "@apollo/client"

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`
  query NewQuery {
    products {
      edges {
        node {
          name
          productCategories {
            edges {
              node {
                id
                name
              }
            }
          }
          date
          description
          featured
        }
      }
    }
  }
`

export default PRODUCTS_AND_CATEGORIES_QUERY
