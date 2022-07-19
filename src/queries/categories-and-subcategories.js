import { gql } from "@apollo/client"

/**
 * GraphQL categories and products query.
 */
const CATEGORIES_QUERY = gql`
  query CategoriesAndSubCategory {
    productCategories {
      nodes {
        description
        name
        id
        children {
          nodes {
            description
            name
            parentId
          }
        }
      }
    }
  }
`

export default CATEGORIES_QUERY
