import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Layout from "./pages/Layout";
import FolderLayout from "./pages/Folder/FolderLayout";
import Main, { getAllFolders } from "./pages/Folder/Main";
import AddSubFolder from "./pages/Folder/AddSubFolder";
import AddDocument from "./pages/Folder/AddDocument";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="folder" element={<FolderLayout />}>
          <Route index element={<Main />} loader={getAllFolders} />
          <Route path="add_subfolder" element={<AddSubFolder />} />
          <Route path="add_document" element={<AddDocument />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
