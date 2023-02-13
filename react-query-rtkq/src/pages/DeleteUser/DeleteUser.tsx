import {useDeleteUserMutation} from "../../api/usersEndpoints";

export function DeleteUser() {

  const [deleteUser,{isLoading, isError, isSuccess}]=useDeleteUserMutation()

  const handleClick = async () => {
    await deleteUser(1)
  }

  return (
    <>
      <p>Delete User</p>
      <button className="p-1 border rounded bg-[#777] text-white"
              onClick={handleClick}>
        Delete
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