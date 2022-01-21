import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import moment from 'moment';

export default function UserTable({ users, limit, offset, handleOpenModal, handleDelete }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 10 },
    {
      field: 'fullName',
      headerName: 'Full name',
      headerAlign: 'left', 
      sortable: false,
      flex: 1,
      valueGetter: (params) =>
        `${params?.row?.first_name || ''} 
        ${params?.row?.last_name || ''}`,
    },
    {
      field: 'email',
      headerName: 'Email',
      headerAlign: 'left', 
      sortable: false,
      flex: 1,
    },
    { 
      field: 'job_title', 
      headerName: 'Job title', 
      headerAlign: 'left', 
      flex: 1
    },
    { 
      field: 'start_date', 
      headerName: 'Date joined',
      headerAlign: 'left', 
      flex: 1,
      valueGetter: (params) => 
        `${moment(params.row.start_date).format('DD/MM/YYYY')}`
    },
    { 
      field: 'edit', 
      headerName: '', 
      sortable: false,
      filterable: false,
      renderCell: (value) => {
        return <Button 
          startIcon={<Edit/>} 
          onClick={ () => handleOpenModal('edit', value.row) }
        >
          edit
        </Button>
      }
    },
    { 
      field: 'delete', 
      headerName: '', 
      sortable: false,
      filterable: false,
      renderCell: (value) => {
        return <Button
          startIcon={<Delete style={{fill:'red'}}/>}
          onClick={ () => handleDelete(value.row.id) }
        />
      }
    }
  ]  
  
  return (
    <DataGrid
      autoHeight
      disableColumnSelector
      disableSelectionOnClick
      checkboxSelection={false}
      rows={users}
      columns={columns}
      pageSize={limit}
      hideFooter={false}
      showColumnRightBorder={false}
    />
  );
}
