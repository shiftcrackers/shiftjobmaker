import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TopMenu } from "../common/TopMenu";

const UserList = () => {
    const mdTheme = createTheme();

    const drawerWidth = 240;

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("/api/v1/users")
            .then((response) => response.data)
            .then((res) => {
                if (res.data.length > 0) {
                    const result = res.data;
                    setUsers(result);
                }
            })
            .catch((err) => {
                // Do something for an error here
                console.log("Error Reading data " + err);
            });
    }, []);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <TopMenu title="회원 목록" />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid item xs={12} /*md={8} lg={3}*/>
                        {/* <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        > */}
                        <React.Fragment>
                            {/* <Title>Recent Orders</Title> */}
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id + user.name}>
                                            <TableCell>{user.id}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Button
                                // type="submit"

                                variant="contained"
                                href="/adduser"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </React.Fragment>
                        {/* </Paper> */}
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default UserList;
