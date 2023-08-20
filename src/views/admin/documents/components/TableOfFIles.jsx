import React, { useMemo } from "react";

import { files } from '../variables';
import { FiSearch,FiFilter,FiUpload } from "react-icons/fi";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import FileView from "./FileView";

const TableOfFIles = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {

    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <div className="w-full z-10 glassCard sm:overflow-auto p-4  col-span-2">
      <a
        className="text-sm px-5 font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
        href=" "
      >
        Folder
        <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
          {" "}
          /{" "}
        </span>
        Folder
      </a>
      <div className="relative flex items-center justify-between gap-5">
        
          <div className="relative mt-[5px] flex h-[61px]  items-center justify-around  rounded-full bg-white py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-50 dark:shadow-none  md:flex-grow-0 gap-2 xl:w-[365px] xl:gap-2">

            <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
              <p className="pl-3 pr-2 text-xl flex justify-between">
                <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
                
              </p>
              <input
                type="text"
                placeholder="Search..."
                class="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
              />

            </div>
              <button className="p-3 rounded-full text-xl shadow-md dark:bg-navy-50">
                <FiFilter className="h-4 w-4 text-navy-500 " />
              </button>


          </div>
          <button className="p-3 rounded-full bg-white text-xl shadow-md dark:bg-navy-50">
            <FiUpload className="h-4 w-4 text-navy-500 " />
          </button>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
      {files.map((file, i) => (
        <FileView 
            key = {file.id}
            fileName = {file.fileName}
            date = {file.date}

        />
      ))}
      </div>
    </div>
  );
};

export default TableOfFIles;
