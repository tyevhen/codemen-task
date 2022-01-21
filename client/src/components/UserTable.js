import * as React from 'react';
import { DataGrid as DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 200,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'first_name') || ''} ${
//         params.getValue(params.id, 'last_name') || ''
//       }`,
//   },
//   { field: 'job_title', headerName: 'Job title', width: 300 },
//   { field: 'start_date', headerName: 'Date joined', width: 160 },
//   { 
//     field: 'delete', 
//     headerName: null, 
//     width: 50,
//     sortable: false,
//     renderCell: (value) => {
//       console.log("delete value", value);
//       return <button>delete</button>
//     }
//   },
//   { 
//     field: 'edit', 
//     headerName: null, 
//     width: 50,
//     sortable: false,
//     renderCell: (value) => {
//       console.log("edit value", value);
//       return <button>edit</button>
//     }
//   }

//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];


export default function UserTable({ users, limit, offset, handleOpenModal }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'fullName',
      headerName: 'Full name',
      sortable: false,
      width: 150,
      valueGetter: (params) =>
        `${params?.row?.first_name || ''} 
        ${params?.row?.last_name || ''}`,
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: false,
      width: 100
    },
    { field: 'job_title', headerName: 'Job title', width: 250 },
    { field: 'start_date', headerName: 'Date joined', width: 160 },
    { 
      field: 'delete', 
      headerName: '', 
      width: 50,
      sortable: false,
      renderCell: (value) => {
        // console.log("delete value", value);
        return <button>delete</button>
      }
    },
    { 
      field: 'edit', 
      headerName: '', 
      width: 50,
      sortable: false,
      renderCell: (value) => {
        return <button onClick={ 
          () => handleOpenModal('edit', value.row) }>edit</button>
      }
    }
  ]  
  
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={limit}
        hideFooter={true}
        showColumnRightBorder={false}
      />
    </div>
  );
}
