import { useQuery } from "@apollo/client";
import { Avatar } from "@chakra-ui/avatar";
import Link from "next/link";

import { FETCH_USER } from "../operations/queries/user";

const Dashboard = () => {
  const { data, loading, error } = useQuery(FETCH_USER);
  if (loading) return <div>loading...</div>;
  if (error) {
    console.log(error);
    return <div>error!!!</div>;
  }

  const { name, avatar, contests } = data.fetchUser;
  return (
    <div>
      {/* <Link href="/"><a>Home</a></Link>
      <p>I am {name} and below are my contests</p>
      <Avatar src={avatar} />
      {contests &&
        contests.map((contest) => (
          <div key={contest._id} style={{borderBottom: "10px solid green"}}>
            <h3>{contest._id}</h3>
            <p>created on {contest.crat}</p>
            {contest.questions.map((question) => {
              return (
                <div>
                  <span>{question.num}</span>
                  <p>{question.text}</p>
                </div>
              );
            })}
          </div>
        ))} */}
        {JSON.stringify(data, null, 1)}
    </div>
  );
};

export default Dashboard;
