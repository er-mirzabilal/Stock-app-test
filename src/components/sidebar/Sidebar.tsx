import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Avatar, Button, ListItemIcon, Stack, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const list = {
  display: "flex",
  flexDirection: "column",
};
const sidebarStyle = { background: "rgba(14, 14, 14, 1)" };

type Props = {};
export const drawerWidth = 80;

const Sidebar = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            overflowX: "hidden",
            border: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack
          direction="column"
          spacing={2}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
          sx={sidebarStyle}
        >
          <List>
            <ListItem disablePadding sx={list}>
              <ListItemButton>
                <ListItemIcon sx={{ mb: 5, mt: 2, minWidth: 0 }}>
                  <Image
                    src={"/images/logo.png"}
                    height={40}
                    width={40}
                    style={{
                      objectFit: "contain",
                    }}
                    alt="icon"
                  />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                sx={{ height: 60, "&:hover": { background: "transparent" } }}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Image
                    src={"/images/sidebar-icon1.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                sx={{ height: 60, "&:hover": { background: "transparent" } }}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <Image
                    src={"/images/file-icon.svg"}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
