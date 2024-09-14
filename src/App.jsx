import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import MainContent from "./pages/MainContent";
import "./App.css";
import Layout from "./pages/Layout";
import Main, { getAllFolders } from "./pages/Main";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="folder" element={<MainContent />}>
          <Route indexpath="main" element={<Main />} loader={getAllFolders} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
