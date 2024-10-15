// icons
import { TbAntennaBars3 } from "react-icons/tb";
import { TbAntennaBars4 } from "react-icons/tb";
import { TbAntennaBars5 } from "react-icons/tb";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineTonality } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { GoCircleSlash } from "react-icons/go";
import { MdCancel } from "react-icons/md";

export const priorityIcons = (priority) => {
  if (priority === 0 || priority === "No Priority") {
    return  <IoEllipsisHorizontal style={{ color: "#666"  , marginRight: "12px" }} />;
  }
  if (priority === 1 || priority === "Low") {
    return <TbAntennaBars3 style={{ color: "#666"  , marginRight: "12px"}} />;
  }
  if (priority === 2 || priority === "Medium") {
    return <TbAntennaBars4 style={{ color: "#666"  , marginRight: "12px"}} />;
  } 
  if (priority === 3 || priority === "High") {
    return <TbAntennaBars5 style={{ color: "#666" , marginRight: "12px" }} />;
  }
  return <BsFillExclamationSquareFill style={{ color: "red"  , marginRight: "12px"}} />;
};

export const progressIcons = (progress) => {
  switch (progress) {
   
    case "Todo":
      return <FaRegCircle style={{ color: "#ddd" , marginRight: "12px"}} />;
   
      case "In progress":
      return <MdOutlineTonality style={{ color: "#EFEF00"  , marginRight: "12px" }} />;
   
      case "Done":
      return <FaCircleCheck style={{ color: "blue"  , marginRight: "12px"}} />;
   
      case "Backlog":
      return <GoCircleSlash style={{ color: "#666"  , marginRight: "12px" }} />;
   
      default:
      return <MdCancel style={{ color: "#666"  , marginRight: "12px"}} />;
  }
};