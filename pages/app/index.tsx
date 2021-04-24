import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Avatar } from "@chakra-ui/avatar";
import Link from "next/link";

import client from "../../apollo-client";

const Dashboard = ({ user}) => {
console.log("user",user)
  return (
    <div>
      <Link href="/client">
        <a>Go client</a>
      </Link>
      <div>
        <Link href="/app/open">
          <a>Go Open</a>
        </Link>
      </div>
      <p>I am {user.name} and below are my contests</p>
    <Avatar src={user.avatar} />
      {/* {user.contests.map((contest) => (
        <div key={contest._id}>
          <h3>{contest.name}</h3>
          <p>created on {contest.crat}</p>
        </div>
      ))} */}
    </div>
  );
};

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: gql`
      query FetchUser {
        fetchUser {
          name
          avatar
          contests {
            name
            crat
            _id
          }
        }
      }
    `,
  });
console.log(data, error)
  return {
    props: {
   
      user: data.fetchUser,
    },
  };
}

export default Dashboard;
