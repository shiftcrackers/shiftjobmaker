import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopMenu from "../common/TopMenu";

const AddUser = () => {
    const history = useNavigate();
    const theme = createTheme();
    const [user, setUser] = useState({
        name: "",
    });

    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        setUser({
            // ...user,
            [name]: value,
        });
    }, []);

    const saveUser = (e) => {
        e.preventDefault();
        let { name } = user; //구조 분해 할당 사용 name = user.name
        axios
            .post("/api/v1/users", {
                name,
            })
            .then(function (response) {
                // response
                history.push("/");
            })
            .catch(function (error) {
                // 오류발생시 실행
            })
            .then(function () {
                // 항상 실행
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <TopMenu title="회원 가입" />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    value={user.name}
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="User Name"
                                    autoFocus
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            onClick={saveUser}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default AddUser;
