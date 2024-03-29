import {useUpdatePostMutation} from "../../api/postsEndpoints"

export function UpdatePost() {
  const [updatePost, {isLoading, isError, isSuccess}] = useUpdatePostMutation()

  const handleClick = async () => {
    await updatePost({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  }

  return (
    <>
      <p>Update Post</p>

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