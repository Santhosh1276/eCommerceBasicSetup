/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ cartCount, toggleModal }) => {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography variant="h6" style={{ flex: 1 }}>
                    SANTO STORE
                </Typography>
                <IconButton color="inherit" onClick={toggleModal}>
                    <Badge badgeContent={cartCount} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
