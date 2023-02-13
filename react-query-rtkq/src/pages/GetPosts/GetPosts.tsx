import {useGetPostsQuery} from "../../api/postsEndpoints";
import {PostDataType} from "../../types";

export function GetPosts() {

  const {data, isLoading, error} = useGetPostsQuery({})

  return (
    <div>
      <h1>RTK-query - Get Posts</h1>

      {isLoading &&
        <h2>Loading ...</h2>
      }

      {error &&
        <span className="text-red-500 text-[24px] p-2">
          error loading
        </span>
      }

      {data &&
        <ul>{
          data.map((post: PostDataType) => {
            return <li>
              <p>id: {post.id}</p>
              <p>title: {post.title}</p>
              <p>post: {post.body}</p>
            </li>
          })
        }
        </ul>
      }

    </div>
  )
}