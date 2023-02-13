import {Link} from "react-router-dom";

export function Posts() {
  return (
    <>
      <h2>Posts</h2>
      <nav>
        <ul className="flex flex-row">
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/posts/get-posts">Get Posts</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/posts/get-post">Get Post</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/posts/add-post">Add Post</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/posts/update-post">Update Post</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/posts/delete-post">Delete Post</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}