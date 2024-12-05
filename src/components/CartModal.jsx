/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, List, ListItem, ListItemText } from "@mui/material";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
    return (
        <Dialog open={true} onClose={closeModal}>
            <DialogTitle>Item List</DialogTitle>
            <DialogContent>
                <List>
                    {cart.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={item.title}
                                secondary={`$${item.price}`}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CartModal;
