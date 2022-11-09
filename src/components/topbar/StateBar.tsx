import React from "react";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import Image from "next/image";
import InfoBar from "./InfoBar";

type Props = {};

const root = {
  display: "flex",
  justifyContent: "space-between",
  background: "#1E1E1E",
  height: 33,
  width: "100%",
  alignItems: "center",
  position: "fixed",
  top: 69,
  borderTop: "2px solid rgba(51, 51, 51, 0.23)",
  borderBottom: "2px solid rgba(51, 51, 51, 0.23)",
};

const StateBar = (props: Props) => {
  return (
    <>
      <InfoBar />
      <Box sx={root}>
        <Box
          sx={{ width: { sm: "86%", md: "90%", lg: "93%", xl: "94%" }, pl: 3 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={"/images/topbar-icon1.svg"}
                height={20}
                width={20}
                style={{
                  objectFit: "contain",
                  marginRight: "8px",
                }}
                alt="icon"
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                  fontSize: { sm: "7px", md: "7px", lg: "11px", xl: "13px" },
                }}
              >
                META&nbsp;
                <span style={{ fontWeight: "300" }}>$175.23 &nbsp;</span>
                <span
                  style={{ fontWeight: "300", color: "rgba(30, 200, 118, 1)" }}
                >
                  +$19.25(+13.51%)
                </span>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: 20,
                borderColor: "rgba(51, 51, 51, 0.23)",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={"/images/appleIcon.svg"}
                height={20}
                width={20}
                style={{
                  objectFit: "contain",
                  marginRight: "8px",
                }}
                alt="icon"
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                  fontSize: { sm: "7px", md: "7px", lg: "11px", xl: "13px" },
                }}
              >
                AAPL&nbsp;
                <span style={{ fontWeight: "300" }}>$135.23 &nbsp;</span>
                <span
                  style={{ fontWeight: "300", color: "rgba(244, 67, 54, 1)" }}
                >
                  -$1.25 (-0.51%)
                </span>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: 20,
                borderColor: "rgba(51, 51, 51, 0.23)",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={"/images/TSLA.svg"}
                height={20}
                width={20}
                style={{
                  objectFit: "contain",
                  marginRight: "8px",
                }}
                alt="icon"
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                  fontSize: { sm: "7px", md: "7px", lg: "11px", xl: "13px" },
                }}
              >
                TSLA&nbsp;
                <span style={{ fontWeight: "300" }}>$335.23 &nbsp;</span>
                <span
                  style={{ fontWeight: "300", color: "rgba(244, 67, 54, 1)" }}
                >
                  -$600.25 (-66.51%)
                </span>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: 20,
                borderColor: "rgba(51, 51, 51, 0.23)",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={"/images/appleIcon.svg"}
                height={20}
                width={20}
                style={{
                  objectFit: "contain",
                  marginRight: "8px",
                }}
                alt="icon"
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                  fontSize: { sm: "7px", md: "7px", lg: "11px", xl: "13px" },
                }}
              >
                AAPL&nbsp;
                <span style={{ fontWeight: "300" }}>$135.23 &nbsp;</span>
                <span
                  style={{ fontWeight: "300", color: "rgba(244, 67, 54, 1)" }}
                >
                  -$1.25 (-0.51%)
                </span>
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                height: 20,
                borderColor: "rgba(51, 51, 51, 0.23)",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={"/images/topbar-icon1.svg"}
                height={20}
                width={20}
                style={{
                  objectFit: "contain",
                  marginRight: "8px",
                }}
                alt="icon"
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "800",
                  fontSize: { sm: "7px", md: "7px", lg: "11px", xl: "13px" },
                }}
              >
                META&nbsp;
                <span style={{ fontWeight: "300" }}>$175.23 &nbsp;</span>
                <span
                  style={{ fontWeight: "300", color: "rgba(30, 200, 118, 1)" }}
                >
                  +$19.25(+13.51%)
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StateBar;
