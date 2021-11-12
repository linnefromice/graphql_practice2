import { useGetTasksQuery } from "../../generated/apollo/graphql";

export const ApolloTable: React.VFC = () => {
  const { data, error, loading, fetchMore } = useGetTasksQuery({
    variables: {
      first: 3
    }
  })

  if (loading) return <div>loading...</div>
  if (error) return <div>{error.message}</div>
  if (!data) return <div>NO DATAS</div>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data.tasks.edges?.map(edge => edge?.node && (
            <tr key={edge.node.id}>
              <td>{edge.node.id}</td>
              <td>{edge.node.title}</td>
              <td>{edge.node.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.tasks.edges && data.tasks.pageInfo.hasNextPage && (
        <div>
          <button onClick={() => fetchMore({
            variables: {
              first: 3,
              after: data.tasks.pageInfo.endCursor
            }
          })}>fetchMore</button>
        </div>
      )}
    </>
  )
}
