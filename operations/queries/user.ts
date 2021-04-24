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

// export async function getServerSideProps() {
//   const { data, error } = await createApolloClient().query({
//     query: gql`
//       query FetchUser {
//         fetchUser {
//           name
//           avatar
//           contests {
//             name
//             crat
//             _id
//           }
//         }
//       }
//     `,
//   });
//   console.log(data, error);
//   return {
//     props: {
//       user: data.fetchUser,
//     },
//   };
// }

