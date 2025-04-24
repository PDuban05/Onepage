import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        bottom: 0, // Lo coloca en la parte inferior
        left: 0,
        width: "100%", // Asegura que ocupe todo el ancho
      }}
    >
      
      <Typography variant="body2" sx={{ marginTop: "20px" }}>
        © {new Date().getFullYear()} Pedro moreno. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;