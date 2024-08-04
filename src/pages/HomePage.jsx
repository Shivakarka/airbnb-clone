import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import CategoryTabList from "../components/CategoryTabList";

const HomePage = () => {
  return (
    <Container maxWidth={"100%"} className="p-4">
      <Navbar />
      <CategoryTabList />
    </Container>
  );
};

export default HomePage;
