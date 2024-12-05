/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import { Container, Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      // alert("Item already added to the cart");
      toast.info("Item Already Added to the Cart");
    } else {
      setCart([...cart, product]);
      toast.success("Item Added Successfully into the Cart");
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      
      <Navbar
        cartCount={cart.length}
        toggleModal={() => setIsModalOpen(true)}
      />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      <Container>
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {products.map((prod, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard product={prod} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {isModalOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}

  
    </div>
  );
};

export default App;
