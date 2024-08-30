import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function HandleZoom({ handleZoomOut, handleZoomIn }) {
  return (
    <div className="absolute left-[50%] bottom-10 z-10 flex items-center justify-center gap-1">
      <div className="flex items-center justify-center p-1.5 rounded bg-slate-800/50 text-gray-500 cursor-pointer" onClick={handleZoomOut}>
        <FaMinus size={10} />
      </div>
      <div className="flex items-center justify-center p-1.5 rounded bg-slate-800/50 text-gray-500 cursor-pointer" onClick={handleZoomIn}>
        <FaPlus size={10} />
      </div>
    </div>
  );
}

export default HandleZoom;
