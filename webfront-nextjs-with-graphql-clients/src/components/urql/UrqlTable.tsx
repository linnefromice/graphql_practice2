import { useState } from "react";
import { useGetTasksQuery } from "../../generated/urql/graphql";

const INITIAL_FIRST = 3
export const UrqlTable: React.VFC = () => {
  const [first, setFirst] = useState<number>(INITIAL_FIRST)
  // const [after, setAfter] = useState<string|null|undefined>(null)

  const [ result, reexecuteQuery ] = useGetTasksQuery({
    variables: {
      first: first,
      // after: after
    }
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
              setFirst(INITIAL_FIRST + (data.tasks.edges?.length || 0))
              // setAfter(data.tasks.pageInfo.endCursor)
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
