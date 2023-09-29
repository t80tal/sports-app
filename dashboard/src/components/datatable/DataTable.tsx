import { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../datatablesource";
import "./DataTable.scss";

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => { 
      return (
        <div className="cellAction">
          <Link to="/users/test" className="link">
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
            Delete
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={[...userColumns, actionColumn]}
        // pageSize={9}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
