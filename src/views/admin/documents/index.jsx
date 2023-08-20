

import {
  columnsDataDevelopment,
  columnsDataCheck,

} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import FolderSection from "./components/FolderSection";
import TableOfFIles from "./components/TableOfFIles";


const Documents = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-3">
        <FolderSection
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <TableOfFIles className="grid col-span-2" columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>
    </div>
  );
};

export default Documents;
