import React from "react";
import Landing from "../src/views/landing/Landing";
import Box from "@mui/material/Box";
type Props = {};

const Home = (props: Props) => {
  return (
    <Box sx={{ paddingTop: "200px", width: "100%" }}>
      <Landing />
    </Box>
  );
};

export default Home;
