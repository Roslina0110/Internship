import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
  const rows = [
    {
        Name:'Interstellar',
        Category:'Sci-Fi',
        Director:'Christopher Nolan',
        ReleaseYear:'2014',
        Image:'interstellar.jpg'

    },
    {
        Name:'The Pursuit of Happyness',
        Category:'Drama',
        Director:'Gabriele Muccino',
        ReleaseYear:'2006',
        Image:'pursuit.jpeg'
    },
    {
        Name:'La La Land',
        Category:'Romance',
        Director:'Damien Chazelle',
        ReleaseYear:'2016',
        Image:'lala.jpg'    
    }
  ];
  
  export default function Records() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Release Year</TableCell>
              <TableCell>Image</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                
                <TableCell >{row.Category}</TableCell>
                <TableCell >{row.Director}</TableCell>
                <TableCell>{row.ReleaseYear}</TableCell>
                <TableCell><img src={row.Image} alt={row.Name} width="125" height="125" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }