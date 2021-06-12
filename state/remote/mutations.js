import gql from "graphql-tag";

export const LOGIN_WITH_SOCIAL = gql`
  mutation LoginWithSocial(
    $name: String
    $providerId: String!
    $sid: String!
    $email: String
  ) {
    loginWithSocial(
      input: {
        name: $name
        providerId: $providerId
        sid: $sid
        email: $email
      }
    ) {
      code
      success
      message
      user {
        _id
        name
      }
      token
    }
  }
`;
