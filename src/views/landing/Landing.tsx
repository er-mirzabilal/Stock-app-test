import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import StockTable from "../../components/stockTable/StockTable";
type Props = {};

const Landing = (props: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "98%",
          borderRadius: "0px 15px",
          background: "#171717",
        }}
      >
        <Box sx={{ pl: 3, pt: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            Lorem Ipsum Lorem Ipsum
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>

        <Box
          sx={{
            background: "rgba(26, 26, 26, 1)",
            mt: 3,
            p: "8px 8px 8px 24px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="contained">All stocks</Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "rgba(30, 200, 118, 0.5)" }}
              startIcon={
                <Image
                  src={"/images/leaf.svg"}
                  height={20}
                  width={10}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="icon"
                />
              }
            >
              Today’s Ips
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "rgba(244, 67, 54, 0.5)" }}
              startIcon={
                <Image
                  src={"/images/rocket.svg"}
                  height={20}
                  width={10}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="icon"
                />
              }
            >
              Today’s Ips
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "rgba(51, 51, 51, 1)" }}
            >
              Penny stocks
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            mt: 3,
            pl: "24px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Default view</Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "rgba(237, 160, 68, 1)",
                color: "rgba(237, 160, 68, 1)",
              }}
              startIcon={
                <Image
                  src={"/images/vip.svg"}
                  height={20}
                  width={10}
                  style={{
                    objectFit: "contain",
                  }}
                  alt="icon"
                />
              }
            >
              Lorem ipsum
            </Button>
          </Stack>
        </Box>
        <Box sx={{ mt: 3 }}>
          <StockTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
