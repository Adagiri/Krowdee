import { gql } from "@apollo/client"

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      name
      avatar
      contests {
        _id
        name
        questions {
          text
          num
        }
      }
    }
  }
`
