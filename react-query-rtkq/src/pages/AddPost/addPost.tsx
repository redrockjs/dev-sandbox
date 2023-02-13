import {useAddPostMutation} from "../../api/postsEndpoints"
import {useRef} from "react";

export function AddPost() {

  const [addPost, {isLoading, isError}] = useAddPostMutation()

  const titleRef = useRef<HTMLInputElement>(null)
  const postRef = useRef<HTMLInputElement>(null)

  const handleAddPost = async () => {
    console.log(
      {
        title: titleRef.current?.value,
        post: postRef.current?.value
      }
    )
    await addPost(
      {
        title: titleRef.current?.value,
        post: postRef.current?.value
      }
    ).unwrap();
  }

  return (
    <div>
      <h1>RTK-query - Add Post</h1>
      <div className="flex flex-col items-start gap-2 w-[300px]">
        <input className="my-2 p-1"
               type="text"
               placeholder="title"
               ref={titleRef}
        />
        <input className="my-2 p-1"
               type="text"
               placeholder="post"
               ref={postRef}
        />
        <button type={"button"}
                onClick={handleAddPost}>
          Send
        </button>
      </div>
      {isLoading &&
        <h2>Loading...</h2>
      }

      {isError &&
        <p className="text-red-500 text-[24px] py-2">
          error loading
        </p>
      }
    </div>
  )
}