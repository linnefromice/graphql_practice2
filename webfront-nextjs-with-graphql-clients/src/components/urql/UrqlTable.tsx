import { useState } from "react";
import { useGetTasksQuery } from "../../generated/urql/graphql";

export const UrqlTable: React.VFC = () => {
  const [after, setAfter] = useState<string|null|undefined>(null)

  const [ result, reexecuteQuery ] = useGetTasksQuery({
    variables: { after }
  })
  const { data, fetching, error } = result;

  if (fetching) return <div>loading...</div>
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
          <button
            onClick={() => {
              setAfter(data.tasks.pageInfo.endCursor)
              reexecuteQuery({ requestPolicy: 'network-only' });
            }}
          >
            fetchMore
          </button>
        </div>
      )}
    </>
  )
}
