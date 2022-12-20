import Nav from "./components/Nav";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard"
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Layout from "./Layout";
import PersistLogin from "./features/auth/PersistLogin";
import PreFetch from "./features/auth/PreFetch";
import ProtectedRoute from "./features/auth/ProtectedRoute";



function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>

        <Route element={<PersistLogin />}>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Main />} />

            {/* semi protected routes */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Login />} />

              <Route element={<PreFetch />}>
                <Route element={<ProtectedRoute />}>
                  {/* protected routes */}
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
              </Route>
            </Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
