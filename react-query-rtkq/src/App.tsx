import React from "react";
import "./App.css";
import {useGetPostsQuery} from "./Api/apiSlice";


type PostDataType = {
  userId: number
  id: number
  title: string
  body: string
}

function App() {

  const {data, isLoading, error} = useGetPostsQuery({})


  const handleClick = () => {
  };


  return (
    <main className="main">
      <h1>RTK-query</h1>
      <button>Get</button>
      {isLoading
        && <h2>Loading ...</h2>
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
      {error &&
        <p>error</p>
      }

    </main>
  )
}

export default App;
