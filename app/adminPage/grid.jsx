"use client";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function GridComponent() {
    const data = [
        { name: "dan", age: 28 },
        { name: "max", age: 26 },
        { name: "lucho", age: 22 },
        { name: "juan", age: 21 },
        { name: "pepe", age: 23 },
      ];
      const columns =[
        {
            headerName:"name", field:'name',
        },
        {
            headerName:"age", field:'age',
        }
      ]
      return (
        <div className="ag-theme-alpine"
        style={{ height: '600px' }}>
          <AgGridReact rowData={data} columnDefs={columns}  />
        </div>
      );
}