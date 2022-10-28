import { Box, Typography } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import getStyles from "./styles";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Runway", path: "/runway" },
  { name: "Beauty", path: "/beauty" },
  { name: "Contact me", path: "/form" },
];

const Layout = ({ children }) => {
  const classes = getStyles();
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  return (
    <Box>
      <Box sx={classes.header}>
        <Typography variant={width > 425 ? "h4" : "h5"} sx={classes.title}>
          Alexandra Sergiienko
        </Typography>
        {width > 768 ? (
          <Box sx={classes.navigation}>
            {navLinks.map((item) => {
              const isCheckedLink = pathname === item.path;
              return (
                <Link
                  to={item.path}
                  key={item.name}
                  style={
                    isCheckedLink ? classes.activeLink : classes.defaultLink
                  }
                >
                  {item.name}
                </Link>
              );
            })}
          </Box>
        ) : (
          <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
            styles={{
              bmBurgerButton: {
                position: "fixed",
                width: width > 425 ? "36px" : "26px",
                height: width > 425 ? "30px" : "20px",
                right: width <= 768 && width > 425 ? "36px" : "15px",
                top:
                  width <= 768 && width > 425
                    ? "23px"
                    : width <= 425 && width > 375
                    ? "17px"
                    : width <= 375 && width > 320
                    ? "16px"
                    : "14px",
              },
              bmBurgerBars: {
                background: "#595244",
              },
              bmBurgerBarsHover: {
                background: "#a90000",
              },
              bmCrossButton: {
                height: "24px",
                width: "24px",
              },
              bmCross: {
                background: "#bdc3c7",
              },
              bmMenuWrap: {
                position: "fixed",
                height: "100%",
                top: 0,
                width: width > 375 ? "300px" : "100%",
              },
              bmMenu: {
                background: "#E8E0D2",
                padding: "2.5em 1.5em 0",
                fontSize: "1.15em",
              },
              bmMorphShape: {
                fill: "#373a47",
              },
              bmItemList: {
                color: "#b8b7ad",
                padding: "0.8em",
              },
              bmItem: {
                display: "inline-block",
              },
              bmOverlay: {
                background: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <main
              id="page-wrap"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {navLinks.map((item) => {
                const isCheckedLink = pathname === item.path;
                return (
                  <Link
                    to={item.path}
                    key={item.name}
                    style={
                      isCheckedLink ? classes.activeLink : classes.defaultLink
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
            </main>
          </Menu>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default Layout;
