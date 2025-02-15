import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import NoPage from "../pages/nopage/Nopage";
import BlogInfo from "../pages/blogInfo/BlogInfo";
import AdminLogin from "../pages/admin/adminLogin/AdminLogin";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import MyState from "../context/data/myState";
import CreateBlog from "../pages/createBlog/createBlog";
// import { ProtectedRouteForAdmin } from "../protectedRoute/ProtectedRouteForAdmin";





function App() {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={ <ProtectedRouteForAdmin><Dashboard /></ProtectedRouteForAdmin>} />
            <Route path="/createBlog" element={ <ProtectedRouteForAdmin><CreateBlog /></ProtectedRouteForAdmin>} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>

    </div>
  )
}

export default App


export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "saikatlodh@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'} />
  }
}
