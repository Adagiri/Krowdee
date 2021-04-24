import { gql } from "@apollo/client";

export const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
