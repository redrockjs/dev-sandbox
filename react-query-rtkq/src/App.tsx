import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  Home,
  Posts,
  GetPosts,
  GetPost,
  AddPost,
  UpdatePost,
  DeletePost,
  Users,
  GetUsers,
  GetUser,
  AddUser,
  UpdateUser,
  DeleteUser
} from "./pages";
import {Header} from "./layouts";


export default function App() {
  return (
    <div className="container mx-auto bg-[#cccccc] h-[100vh] p-5">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/get-posts" element={<GetPosts/>}/>
          <Route path="/posts/get-post" element={<GetPost/>}/>
          <Route path="/posts/add-post" element={<AddPost/>}/>
          <Route path="/posts/update-post" element={<UpdatePost/>}/>
          <Route path="/posts/delete-post" element={<DeletePost/>}/>

          <Route path="/users" element={<Users/>}/>
          <Route path="/users/get-users" element={<GetUsers/>}/>
          <Route path="/users/get-user" element={<GetUser/>}/>
          <Route path="/users/add-user" element={<AddUser/>}/>
          <Route path="/users/update-user" element={<UpdateUser/>}/>
          <Route path="/users/delete-user" element={<DeleteUser/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
