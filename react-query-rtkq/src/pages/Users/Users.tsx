import {Link} from "react-router-dom";

export function Users() {
  return (
    <>
      <h2>Users</h2>
      <nav>
        <ul className="flex flex-row">
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/users/get-users">Get Users</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/users/get-user">Get User</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/users/add-user">Add User</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/users/update-user">Update User</Link>
          </li>
          |
          <li className="cursor-pointer px-1 text-blue-900">
            <Link to="/users/delete-user">Delete User</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}