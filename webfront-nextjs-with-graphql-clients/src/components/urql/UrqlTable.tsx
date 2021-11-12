import { useGetTasksQuery } from "../../generated/urql/graphql";

export const UrqlTable: React.VFC = () => {
  const [ result ] = useGetTasksQuery()
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
      <div>
        <button onClick={() => null}>fetchMore</button>
      </div>
    </>
  )
}
