import { SavedSearchSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes,Route, useNavigate } from "react-router-dom";
import EditTableRow from "./EditTableRow";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

// const subscribarList = [
//   {
//     name: "john doe",
//     date: "18 january, 2019",
//     amount: 1000,
//     status: "close",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "kessy bryan",
//     date: "10 january, 2019",
//     amount: 9000,
//     status: "open",
//     company: "My Fintech LTD.",
//   },
//   {
//     name: "kessy bryan",
//     date: "10 january, 2019",
//     amount: 9000,
//     status: "open",
//     company: "My Fintech LTD.",
//   },
//   {
//     name: "james cassegne",
//     date: "8 january, 2019",
//     amount: 5000,
//     status: "close",
//     company: "Collboy Tech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
// ];

const Savefdgfdsh= ()=>{
  const navigate= useNavigate();
  navigate('users/edit');

}

const PaginationTable = () => {
  const [tables, setTables] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    tableData();
  }, []);

  const tableData = async () => {
    const res = await axios.get("http://localhost:3000/users");
    console.log(res.data);
    setTables(res.data);
    console.log("The End");
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteTableRow = (id) => {
    console.log(id);
    return axios.delete(`http://localhost:3000/users/${id}`);
  };

  return (
    <>
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.email}</TableCell>
                  <TableCell align="center">{subscriber.username}</TableCell>
                  <TableCell align="center">
                    {subscriber.address.street}
                  </TableCell>
                  <TableCell align="center">
                    ${subscriber.address.city}
                  </TableCell>
                  <TableCell align="right">
                    <button className="btn btn-warning mx-3" onClick={Savefdgfdsh()}> Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        DeleteTableRow(subscriber.id);
                      }}
                    >
                      
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={tables.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>
    </>
  );
};

export default PaginationTable;
