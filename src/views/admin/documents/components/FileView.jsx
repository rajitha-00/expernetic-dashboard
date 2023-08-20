import React from 'react'
import { FiDownload,FiTrash2} from "react-icons/fi";
import { AiOutlineFilePdf} from "react-icons/ai";

const FileView = (props) => {
  return (
    <>
      <div className="rowWhite mt-5 hover:shadow-md z-40 shadow-sm bg-white dark:bg-navy-50 py-2 rounded-[10px]  px-7 flex justify-between  items-center">
        <div className="flex items-center justify-between ">
            <div className="file shadow-md p-1 rounded-[10px]">
                <AiOutlineFilePdf className="h-6 w-6 text-red-500" />
            </div>
            <div className="fileName">
                <p className=' hover:font-semibold px-5 dark:text-navy-900'>{props.fileName}</p>
            </div>
        </div>
        <div className="date">
            <p className=' py-1 px-5 rounded-[10px] dark:text-navy-900'>{props.date}</p>
        </div>
        <div className="flex">
            <div className="download">
                <button className='hover:font-semibold flex items-center shadow-md p-1 rounded-[10px]'>
                    <FiDownload className="h-6 w-6 text-green-600" />
                </button>
            </div>
            <div className="delete pl-5 ">
                <button className='hover:font-semibold flex items-center shadow-md p-1 rounded-[10px]'>
                    <FiTrash2 className="h-6 w-6 text-red-500" />
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default FileView
