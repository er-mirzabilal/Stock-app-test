import React from "react";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import Image from "next/image";
import InfoBar from "./InfoBar";
import StateBar from "./StateBar";

type Props = {};

const root = {
  display: "flex",
  justifyContent: "space-between",
  background: "#1E1E1E",
  height: 33,
  width: "100%",
  alignItems: "center",
  position: "fixed",
  top: 34,
};

const Topbar = (props: Props) => {
  return (
    <>
      <InfoBar />
      <Box sx={root}>
        <Box
          sx={{ width: { sm: "70%", md: "75%", lg: "50%", xl: "35%" }, pl: 3 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { sm: "10px", md: "14px", lg: "14px", xl: "14px" },
              }}
            >
              Market closes in&nbsp;
              <span style={{ fontWeight: "900" }}>1hr 30min 20sec</span>
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: 20,
                borderColor: "rgba(51, 51, 51, 0.23)",
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { sm: "10px", md: "14px", lg: "14px", xl: "14px" },
              }}
            >
              Fri, Aug 26
            </Typography>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ height: 20, borderColor: "rgba(51, 51, 51, 0.23)" }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { sm: "10px", md: "14px", lg: "14px", xl: "14px" },
              }}
            >
              2:45 PM EST
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: { sm: "60%", md: "60%", lg: "65%", xl: "65%" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              pr: { sm: 11, md: 12, lg: 16, xl: 16 },
            }}
          >
            <Image
              src={"/images/topbar-bellicon.svg"}
              height={20}
              width={20}
              style={{
                objectFit: "contain",
              }}
              alt="icon"
            />
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: 20,
                borderColor: "rgba(51, 51, 51, 0.23)",
                marginRight: { sm: "10px", md: "15px", lg: "25px", xl: "25px" },
                marginLeft: {
                  sm: "5px",
                  md: "8px",
                  lg: "12px",
                  xl: "12px",
                },
              }}
            />
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/2.jpg"
              sx={{
                mr: {
                  sm: "5px",
                  md: "15px",
                  lg: "15px",
                  xl: "15px",
                },
                height: {
                  sm: "25px",
                  md: "30px",
                  lg: "30px",
                  xl: "30px",
                },
                width: {
                  sm: "25px",
                  md: "30px",
                  lg: "30px",
                  xl: "30px",
                },
              }}
            />
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.87)",
                fontSize: { sm: "10px", md: "14px", lg: "14px", xl: "14px" },
              }}
            >
              Good afternoon, <span style={{ fontWeight: "700" }}>T!</span>
            </Typography>
            <Image
              src={"/images/topbar-arrowdown.svg"}
              height={20}
              width={10}
              style={{
                objectFit: "contain",
                marginLeft: "15px",
              }}
              alt="icon"
            />
          </Box>
        </Box>
      </Box>
      <StateBar />
    </>
  );
};

export default Topbar;
