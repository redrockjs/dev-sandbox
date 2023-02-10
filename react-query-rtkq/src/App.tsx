import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {GetPost, GetPosts, Home, AddPost} from "./pages";
import {Header} from "./layouts";


export default function App() {
  return (
    <div className="container mx-auto bg-[#cccccc] h-[100vh] p-5">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/getposts" element={<GetPosts/>}/>
          <Route path="/getpost" element={<GetPost/>}/>
          <Route path="/addpost" element={<AddPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
