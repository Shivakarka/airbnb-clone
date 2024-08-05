import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import CategoryTabList from "../components/CategoryTabList";
import PropertiesList from "../components/PropertiesList";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <Container maxWidth={"100%"} className="p-4">
      <Navbar />
      <CategoryTabList />
      <PropertiesList />
      <Footer />
    </Container>
  );
};

export default HomePage;
