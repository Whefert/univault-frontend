import Breadcrumb from "../components/Breadcrumb";
import SubMenu from "../components/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Folder from "../components/Folder";
import FolderInformation from "../components/FolderInformation";
import FolderContents from "../components/FolderContents";
import { useLoaderData } from "react-router-dom";
import useHttps from "../hooks/useHttps";
import axios from "axios";
import FolderLayout from "./FolderLayout";

export default function MainContent() {
  const folders = useLoaderData();
  return (
    <>
      <FolderLayout />
    </>
  );
}
export async function getAllFolders() {
  try {
    const res = await axios.get("http://localhost:3000/folder");
    return res.data;
  } catch (error) {
    return [];
  }
}
