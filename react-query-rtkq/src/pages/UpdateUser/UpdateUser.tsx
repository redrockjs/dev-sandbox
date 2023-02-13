import {useUpdateUserMutation} from "../../api/usersEndpoints";

export function UpdateUser() {


  const [updateUser, {isLoading, isError, isSuccess}] = useUpdateUserMutation()

  const handleClick = async () => {
    await updateUser({
      id: 1,
      username: "Alex Smith",
      email: "alex@smith.com"
    })
  }

  return (
    <>
      <p>Update User</p>

      <button className="p-1 border rounded bg-[#777] text-white"
              onClick={handleClick}>
        Update
      </button>

      {isLoading &&
        <h2>Loading...</h2>
      }

      {isSuccess &&
        <h2 className="text-green-500 text-[24px] py-2">
          Update successful
        </h2>
      }

      {isError &&
        <p className="text-red-500 text-[24px] py-2">
          Error update!
        </p>
      }
    </>
  )
}