import CardMenu from "components/card/CardMenu";
import { Popover, Transition } from '@headlessui/react'
import React, { useMemo, Fragment } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Accordion from "./Accordion";
import { BsFolderPlus} from "react-icons/bs";

const FolderSection = (props) => {
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
    <div className={"glassCard w-full z-10 h-full p-4 "}>
      <div class="relative flex items-center justify-between dark:bg-navy-900 rounded-full shadow-md px-4 py-1 bg-navy-50">
        <Popover className="relative">
          <Popover.Button className="rounded-full p-1 ">
            <BsFolderPlus className="h-6 w-6 text-navy-500 dark:text-white" />
          </Popover.Button>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
          >
              <Popover.Panel className="absolute bg-white shadow-md min-h-[50vh] items-center rounded-[20px] justify-center z-10 mt-5 flex w-screen max-w-max translate-x px-4">
                  <p>New Folder Creations Here</p>
              </Popover.Panel>
          </Transition>
        </Popover> 

        <div class="text-md font-bold text-navy-500 dark:text-white">
          New Folder
        </div>
        <CardMenu />
      </div>

      <div class="h-full overflow-x-scroll xl:overflow-x-hidden mt-5">
        <Accordion />
      </div>
    </div>
  );
};

export default FolderSection;
