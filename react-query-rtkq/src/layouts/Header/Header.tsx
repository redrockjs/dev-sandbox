import { Link } from "react-router-dom";

export function Header() {
  return (
      <div className="container mx-auto flex justify-between items-center py-4">
        <nav>
          <ul className="flex flex-row">
            <li className="cursor-pointer pr-1 text-blue-900">
              <Link to="/">Home</Link>
            </li>
            |
            <li className="cursor-pointer px-1 text-blue-900">
              <Link to="/posts">Posts</Link>
            </li>
            |
            <li className="cursor-pointer pl-1 text-blue-900">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <div>RTK Query</div>
      </div>
  )
}