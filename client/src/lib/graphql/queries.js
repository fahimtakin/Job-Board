import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        title
        id
        date
        company {
          id
          name
        }
      }
    }
  `;
  const data = await client.request(query);
  return data.jobs;
}
