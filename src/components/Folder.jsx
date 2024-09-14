import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import {
  faFolderOpen,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Folder({ name }) {
  const [open, setIsOpen] = useState(false);

  function onButtonClick() {
    setIsOpen((prevState) => {
      setIsOpen(!prevState);
    });
  }

  return (
    <>
      <div className="flex gap-1 items-center">
        <FontAwesomeIcon
          icon={!open ? faMinusCircle : faPlusCircle}
          onClick={onButtonClick}
        />
        <FontAwesomeIcon icon={faFolder} />
        <p>{name}</p>
      </div>
    </>
  );
}
