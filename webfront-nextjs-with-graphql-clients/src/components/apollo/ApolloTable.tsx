import { useState } from "react";

type TaskType = {
  id: number
  title: string
  description: string
  isFinished: boolean
  isDeleted: boolean
  version: number
}

const tasks: TaskType[] = [...Array(3)].map((_, i) => ({
  id: i + 1,
  title: `title ${i + 1}`,
  description: `description ${i + 1}`,
  isFinished: false,
  isDeleted: false,
  version: 1
}));

export const ApolloTable: React.VFC = () => {
  const [datas, setDatas] = useState<TaskType[]>([]);

  const getDatas = () => setDatas(tasks)

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
          {datas.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={getDatas}>GetDatas</button>
      </div>
    </>
  )
}
