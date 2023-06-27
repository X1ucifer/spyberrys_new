import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Row {
  id: number;
  address: string;
  name: string;
  age: number | null;
  image: string;
  contact: string | number;
  // validateContact(): boolean;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 120, headerAlign:'center'},
  {
    field: 'name', headerName: 'Name', width:200,headerAlign:'center',
    renderCell: (params) => (
      <>
          <Avatar alt={params.row.firstName} src={`/avatar/${params.row.image}.jpg`} />
          
     <div style={{position:"relative", left:"6%"}}>{params.row.name}</div>
      </>
  
    ),
  },


  { field: 'address', headerName: 'Address', width: 250,headerAlign:'center' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    headerAlign:'center'
  },
  {
    field: 'contact',
    headerName: 'Contact No',
    type: 'number',
    width: 190,
    headerAlign:'center'
  },
  {
    field: 'Action',
    headerName: 'Action',
    type: 'any',
    width: 190,
    headerAlign:'center',
    renderCell: (params) => (
      <Stack direction="row" spacing={1}>
        <style>
        {`
        .css-1m6aah8-MuiDataGrid-root .MuiDataGrid-cell:focus-within {
          outline: solid #67be2300 1px;}
         
      `}
      </style>
      <IconButton aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" >
        <EditIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="view">
        <RemoveRedEyeIcon />
      </IconButton>
      
    </Stack>
   
    ),
   
  },
 

];


// the table datas can be added here

const rows: Row[] = [
  { id: 1, address: 'Nagercoil', name: 'Abith', age: 23, image:'sdf2', contact: '9994444333'   },
  { id: 2, address: 'Kottar', name: 'Akhil', age: 22, image:'sdf2', contact: '8735210943'   },
  { id: 3, address: 'Thuckalay', name: 'Lenin', age: 23, image:'sdf2', contact: '9956326709'   },
  { id: 4, address: 'Marthandam', name: 'Gerlyin', age: 22, image:'sdf2', contact: '7795309283'   },
  { id: 5, address: 'Colachel', name: 'Vinoth', age: 22, image:'sdf2', contact: '6092387894'   },
  { id: 6, address: 'Puthoor', name: 'Anish', age: 23, image:'sdf2', contact: '8885641234'   },
  { id: 7, address: 'Tirunelveli', name: 'Jude', age: 26, image:'sdf2', contact: '8989564321'   },
  { id: 8, address: 'Madurai', name: 'Rossini', age: 26, image:'sdf2', contact: '9876543210'   },
  { id: 9, address: 'Kanyakumari', name: 'Zayra', age: 18, image:'sdf2', contact: '6759083421'   },
  { id: 10, address: 'Chettikulam', name: 'Lisa', age: 29, image:'sdf2', contact: '9994444333'   },
  { id: 11, address: 'Pallapalam', name: 'Shiya', age: 20, image:'sdf2', contact: '8735210943'   },
  { id: 12, address: 'Thickanamcode', name: 'Jeri', age: 21, image:'sdf2', contact: '8735210943'   },
  { id: 13, address: 'Mulagumoodu', name: 'Jaime', age: 16, image:'sdf2', contact: '9956326709'   },
  { id: 14, address: 'Kattathurai', name: 'Arya', age: 16, image:'sdf2', contact: '7795309283'   },
  { id: 15, address: 'Karungal', name: 'Vinith', age: 21, image:'sdf2', contact: '6092387894'   },
  { id: 16, address: 'Cheranmagadevi', name: 'Abi', age: 22, image:'sdf2', contact: '8885641234'   },
  { id: 17, address: 'Kovilpati', name: 'Royal', age: 44, image:'sdf2', contact: '8989564321'   },
  { id: 18, address: 'Thoothukudi', name: 'Zara', age: 36, image:'sdf2', contact: '9876543210'   },
  { id: 19, address: 'Kuzhlithurai', name: 'Prathees', age: 25, image:'sdf2', contact: '6759083421'   },
];



export default function DataTable() {
  return (
    <div  style={{ height:"110vh", width: '100%', backgroundColor: "white"}}>
      <DataGrid
      rowHeight={70}
        rows={rows}
        columns={columns}
        pagination
        pageSize={10}
        checkboxSelection={true}
        disableSelectionOnClick
        autoHeight={true}
      
        style={{fontSize: '17px'}}
      />
    </div>
  );
}
