import {useGetPostQuery} from "../../api/apiSlice";
import {useState} from "react";

export function GetPost() {

  const [postId, setPostId] = useState(1)

  const {data, isLoading, error} = useGetPostQuery(postId)

  return (
    <div>
      <h1>RTK-query - Get Posts</h1>

      <input type="text" onChange={(e)=>setPostId(+e.target.value)}/>

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
          <p>title: {data.title}</p>
          <p>post: {data.body}</p>
        </>
      }

    </div>
  )
}