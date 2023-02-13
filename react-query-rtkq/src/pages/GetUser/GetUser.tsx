import {useState} from "react";
import { useGetUserQuery } from "../../api/usersEndpoints";

export function GetUser() {
  const [userId, setUserId] = useState(1)

  const {data, isLoading, error} = useGetUserQuery(userId)

  return (
    <>
      <h1>RTK-query - Get User</h1>
      <input type="text" onChange={(e)=>setUserId(+e.target.value)}/>

      {isLoading &&
        <h2>Loading...</h2>
      }

      {error &&
        <p className="text-red-500 text-[24px] py-2">
          error loading
        </p>
      }

      {data &&
        <>
          <p>id: {data.id}</p>
          <p>username: {data.username}</p>
          <p>email: {data.email}</p>
        </>
      }
    </>
  )
}