export const MuiButton = {
  styleOverrides: {
    root: {
      color: "#fff",
      background: "black",
      fontSize: "12px",
      borderRadius: "7px",
    },
    text: {
      // padding: 0,
      background: "transparent",
      boxShadow: "none",
      color: "black",
      "&:hover": {
        background: "transparent",
        boxShadow: "none",
        color: "black",
      },
    },
    contained: {
      background: "rgba(51, 51, 51, 1)",
    },
  },
};
