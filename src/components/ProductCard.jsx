/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";

const ProductCard = ({ product, addToCart }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.title}
                height="200"
                image={product.image}
                title={product.title}
            />
            <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    ${product.price}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "10px" }}
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
