// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { AddCircleOutline } from '@mui/icons-material';
// import Grid from '@mui/material/Grid';
// import { Typography } from '@mui/material';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { makeStyles } from "@mui/styles";

// // const useStyle = makeStyles({
// //   mainBox: {

// //   },
// //   Title: {

// //   },
// //   addAccount: {

// //   },
// //   tHead: {
// //     backgroundColor: "#EFEFEF"
// //   }
// // });

// const DashBoard = () => {

//   // const classes = useStyle();


//   // const classes = useStyle();
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Typography variant='h3'>Accounts</Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Button variant='contained' sx={{float: "right"}}><AddCircleOutline sx={{marginRight: "20px"}}/> Add Account </Button>
//       </Grid>
//       <Grid item xs={12}>

//       </Grid>
//     </Grid>
//   )
// }

// export default DashBoard

//---------------------------Account--------------------------------------
// import React from "react";
// import { Grid } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagrmaIcon from "@mui/icons-material/Instagram";

// const useStyle = makeStyles({
//   mainBox: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     boxShadow: "0px 0px 1px 2px rgba(192,192,192,0.2)",
//     borderRadius: "10px",
//     display: "flex",
//     flexDirection: "column!important",
//     alignItems: "center",
//     padding: "100px 0!important",
//     lineHeight: "3"
//   },
//   btnStyle: {
//     color: "black!important",
//     boxShadow: "0px 0px 2px 2px rgba(192,192,192,0.3)",
//     borderRadius: "10px",
//     padding: "10px 45px!important",
//   },
//   order: {
//     width: "50px!important",
//     height: "5px!important",
//     borderRadius: "5px",
//     backgroundColor: "black"
//   }
// })

// const addAccount = () => {

//   const classes = useStyle();
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={5} className={classes.mainBox}>
//         <Grid item xs={8} sx={{ textAlign: "center", marginBottom: "80px" }}>
//           <Typography variant='h5'>
//             Which account do you want to add?
//           </Typography>
//         </Grid>
//         <Grid item xs={12} >
//           <Button variant="text" className={classes.btnStyle}><TwitterIcon sx={{ marginRight: "15px", color: "#5555c7!important" }} />Add account with Twitter</Button>
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="text" className={classes.btnStyle} sx={{marginTop: "20px"}}><InstagrmaIcon sx={{ marginRight: "15px", color: "#5555c7!important" }} />Add account with Twitter</Button>
//         </Grid>
//         <Grid item xs={12}>
//           <span className={classes.order}></span>
//           <span className={classes.order}></span>
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default addAccount;
//------------------------------Login---------------------------------------------------------------------------

// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
