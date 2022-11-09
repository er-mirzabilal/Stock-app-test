import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Topbar } from "../topbar";
import CssBaseline from "@mui/material/CssBaseline";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        sx={{
          width: "calc(100% - 80px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Topbar />
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
