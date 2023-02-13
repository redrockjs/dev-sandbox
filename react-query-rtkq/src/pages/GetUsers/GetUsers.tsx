import {useGetUsersQuery} from "../../api/usersEndpoints";
import {UserDataType} from "../../types";

export function GetUsers() {

  const {data, isLoading, isError} = useGetUsersQuery({})
  return (
    <>
      <h1>RTK-query - Get Users</h1>

      {isLoading &&
        <h2>Loading ...</h2>
      }

      {isError &&
        <span className="text-red-500 text-[24px] p-2">
          error loading
        </span>
      }

      {data &&
        <ul>{
          data.map((user: UserDataType) => {
            return <li>
              <p>id: {user.id}</p>
              <p>username: {user.username}</p>
              <p>email: {user.email}</p>
            </li>
          })
        }
        </ul>
      }
    </>
  )
}