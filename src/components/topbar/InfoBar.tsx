import React from "react";
import { Box, Typography, Divider, Avatar } from "@mui/material";
import Image from "next/image";

type Props = {};

const root = {
  display: "flex",
  justifyContent: "space-between",
  background: "#1E1E1E",
  height: 33,
  width: "100%",
  alignItems: "center",
  position: "fixed",
  top: 0,
  borderTop: "2px solid rgba(51, 51, 51, 0.23)",
  borderBottom: "2px solid rgba(51, 51, 51, 0.23)",
};

const InfoBar = (props: Props) => {
  return (
    <Box sx={root}>
      <Box
        sx={{ width: { sm: "85%", md: "65%", lg: "50%", xl: "40%" }, pl: 3 }}
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
              src={"/images/homIcon.svg"}
              height={20}
              width={20}
              style={{
                objectFit: "contain",
                marginRight: "20px",
              }}
              alt="icon"
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { sm: "12px", md: "14px", lg: "14px", xl: "14px" },
              }}
            >
              Stocks:&nbsp;
              <span style={{ fontWeight: "600" }}>6,450</span>
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontSize: { sm: "12px", md: "14px", lg: "14px", xl: "14px" },
            }}
          >
            USA Market Cap:&nbsp;
            <span style={{ fontWeight: "600" }}>$94.542T</span>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { sm: "12px", md: "14px", lg: "14px", xl: "14px" },
            }}
          >
            World Market Cap:&nbsp;
            <span style={{ fontWeight: "600" }}>$156.423T</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoBar;
