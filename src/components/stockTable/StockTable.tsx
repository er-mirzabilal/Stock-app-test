import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Box, Typography, Divider, Button } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}
const tableHead = {
  color: "rgba(255, 255, 255, 0.87)",
  border: "none",
  p: "6px 10px",
};
const bodayCell = {
  color: "rgba(255, 255, 255, 0.87)",
  borderBottom: "1px solid rgba(51, 51, 51, 0.23)",
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const data = [
  {
    no: "1",
    n: "2",
    image: "/images/tablearrowup.svg",
    ticker: "TSLA",
    tickerImage: "/images/TSLA.svg",
    name: "Tesla, Inc.",
    market: "$2.99T",
    price: "$898.04",
    pl: "8.45%",
    plImage: "/images/fillup.svg",
    chg: "$12.45",
    chgimage: "/images/fillup.svg",
    vol: "14.551M",
    usd: "$13.05B",
    float: "12.55M",
    dd: "23.75%",
    ddimage: "/images/fillup.svg",
    ytd: "9.12%",
    ytdimage: "/images/filldown.svg",
    days: "/images/graph.svg",
    ath: "$1247.11",
    flow: "CALLS",
    flowimage: "/images/fillup.svg",
    country: "USA",
    flag: "/images/flag.svg",
  },
  {
    no: "1",
    n: "2",
    image: "/images/tablearrowup.svg",
    ticker: "TSLA",
    tickerImage: "/images/TSLA.svg",
    name: "Tesla, Inc.",
    market: "$2.99T",
    price: "$898.04",
    pl: "8.45%",
    plImage: "/images/fillup.svg",
    chg: "$12.45",
    chgimage: "/images/fillup.svg",
    vol: "14.551M",
    usd: "$13.05B",
    float: "12.55M",
    dd: "23.75%",
    ddimage: "/images/fillup.svg",
    ytd: "9.12%",
    ytdimage: "/images/filldown.svg",
    days: "/images/graph.svg",
    ath: "$1247.11",
    flow: "CALLS",
    flowimage: "/images/fillup.svg",
    country: "USA",
    flag: "/images/flag.svg",
  },
  {
    no: "1",
    n: "2",
    image: "/images/tablearrowup.svg",
    ticker: "TSLA",
    tickerImage: "/images/TSLA.svg",
    name: "Tesla, Inc.",
    market: "$2.99T",
    price: "$898.04",
    pl: "8.45%",
    plImage: "/images/fillup.svg",
    chg: "$12.45",
    chgimage: "/images/fillup.svg",
    vol: "14.551M",
    usd: "$13.05B",
    float: "12.55M",
    dd: "23.75%",
    ddimage: "/images/fillup.svg",
    ytd: "9.12%",
    ytdimage: "/images/filldown.svg",
    days: "/images/graph.svg",
    ath: "$1247.11",
    flow: "CALLS",
    flowimage: "/images/fillup.svg",
    country: "USA",
    flag: "/images/flag.svg",
  },
  {
    no: "1",
    n: "2",
    image: "/images/tablearrowup.svg",
    ticker: "TSLA",
    tickerImage: "/images/TSLA.svg",
    name: "Tesla, Inc.",
    market: "$2.99T",
    price: "$898.04",
    pl: "8.45%",
    plImage: "/images/fillup.svg",
    chg: "$12.45",
    chgimage: "/images/fillup.svg",
    vol: "14.551M",
    usd: "$13.05B",
    float: "12.55M",
    dd: "23.75%",
    ddimage: "/images/fillup.svg",
    ytd: "9.12%",
    ytdimage: "/images/filldown.svg",
    days: "/images/graph.svg",
    ath: "$1247.11",
    flow: "CALLS",
    flowimage: "/images/fillup.svg",
    country: "USA",
    flag: "/images/flag.svg",
  },
];

export default function StockTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          background: "rgba(23, 23, 23, 1)",
          borderRadius: "none",
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead sx={{ background: "rgba(51, 51, 51, 1)" }}>
          <TableRow>
            <TableCell sx={tableHead}>#</TableCell>
            <TableCell sx={tableHead}>Ticker</TableCell>
            <TableCell sx={tableHead}>Name</TableCell>
            <TableCell sx={tableHead}>MARKET CAP</TableCell>
            <TableCell sx={tableHead}>PRICE</TableCell>
            <TableCell sx={tableHead}>% P/L, 1D</TableCell>
            <TableCell sx={tableHead}>CHG, 1D</TableCell>
            <TableCell sx={tableHead}>VOL, 1D</TableCell>
            <TableCell sx={tableHead}>USD VOL</TableCell>
            <TableCell sx={tableHead}>FLOAT</TableCell>
            <TableCell sx={tableHead}>% P/L, 30D</TableCell>
            <TableCell sx={tableHead}>% P/L, YTD</TableCell>
            <TableCell sx={tableHead}>Last 30 Days</TableCell>
            <TableCell sx={tableHead}>ATH</TableCell>
            <TableCell sx={tableHead}>FLOW</TableCell>
            <TableCell sx={tableHead}>COUNTRY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            background: "rgba(23, 23, 23, 1)",
          }}
        >
          {data.map((row) => (
            <TableRow key={row.no}>
              <TableCell sx={bodayCell}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.image}
                    height={20}
                    width={10}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />
                  {row.image === "/images/tablearrowup.svg" ? (
                    <Typography
                      sx={{
                        color: "rgba(30, 200, 118, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.n}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "rgba(244, 67, 54, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.n}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: "12px" }}>{row.no}</Typography>
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.tickerImage}
                    height={20}
                    width={15}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />
                  <Button variant="contained" sx={{ p: 0, fontSize: "10" }}>
                    {row.ticker}
                  </Button>
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>{row.name}</TableCell>
              <TableCell sx={bodayCell}>{row.market}</TableCell>
              <TableCell sx={bodayCell}>{row.price}</TableCell>
              <TableCell sx={bodayCell}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.plImage}
                    height={20}
                    width={10}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />

                  {row.plImage === "/images/fillup.svg" ? (
                    <Typography
                      sx={{
                        color: "rgba(30, 200, 118, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.pl}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "rgba(244, 67, 54, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.pl}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.chgimage}
                    height={20}
                    width={10}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />

                  {row.chgimage === "/images/fillup.svg" ? (
                    <Typography
                      sx={{
                        color: "rgba(30, 200, 118, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.chg}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "rgba(244, 67, 54, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.chg}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>{row.vol}</TableCell>
              <TableCell sx={bodayCell}>{row.usd}</TableCell>
              <TableCell sx={bodayCell}>{row.float}</TableCell>
              <TableCell sx={bodayCell}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.ddimage}
                    height={20}
                    width={10}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />

                  {row.ddimage === "/images/fillup.svg" ? (
                    <Typography
                      sx={{
                        color: "rgba(30, 200, 118, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.dd}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "rgba(244, 67, 54, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.dd}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.flowimage}
                    height={20}
                    width={10}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />

                  {row.flowimage === "/images/filldown.svg" ? (
                    <Typography
                      sx={{
                        color: "rgba(244, 67, 54, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.ytd}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "rgba(30, 200, 118, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.ytd}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>
                <Image
                  src={row.days}
                  height={20}
                  width={50}
                  style={{
                    objectFit: "contain",
                    marginRight: "5px",
                  }}
                  alt="icon"
                />
              </TableCell>
              <TableCell sx={bodayCell}>{row.ath}</TableCell>
              <TableCell sx={bodayCell}>
                {" "}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.ddimage}
                    height={20}
                    width={10}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />

                  {row.ddimage === "/images/fillup.svg" ? (
                    <Typography
                      sx={{
                        color: "rgba(30, 200, 118, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.flow}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "rgba(244, 67, 54, 1)",
                        fontSize: "12px",
                        marginRight: "10px",
                      }}
                    >
                      {row.flow}
                    </Typography>
                  )}
                </Box>
              </TableCell>
              <TableCell sx={bodayCell}>
                {" "}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={row.flag}
                    height={20}
                    width={20}
                    style={{
                      objectFit: "contain",
                      marginRight: "5px",
                    }}
                    alt="icon"
                  />

                  <Typography
                    sx={{
                      fontSize: "12px",
                      marginRight: "10px",
                    }}
                  >
                    {row.country}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
