import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/names`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function Home({ data }: any) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Add Users</TableCell>
            <TableCell align="right">Delete Messages</TableCell>
            <TableCell align="right">Delete Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.age >= 25 ? row.username : ""}</TableCell>
              <TableCell align="right">{row.first_name ? row.first_name : ""}</TableCell>
              <TableCell align="right">{row.username === "ZL" ? "" : row.last_name}</TableCell>
              <TableCell align="right">{row.first_name === "Edward" ? Boolean(row.add_users).toString() : ""}</TableCell>
              <TableCell align="right">{row.first_name === "Edward" ? Boolean(row.delete_messages).toString() : ""}</TableCell>
              <TableCell align="right">{row.first_name === "Edward" ? Boolean(row.delete_users).toString() : ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
