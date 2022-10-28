import theme from "config/theme";

const getStyles = () => {
  return {
    card: {
      background: "#FFFAF0",
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content !important",
      margin: "auto",
      flexDirection: "column",
      paddingBottom: "5%",
      paddingRight: "3%",
      paddingLeft: "3%",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      marginBottom: "1.5%",
      [theme.breakpoints.down(426)]: {
        boxShadow: "none",
      },
      "& h6": {
        border: "2px solid rgb(232, 224, 210)",
        padding: "3%",
        textAlign: "center",
        maxWidth: "300px",
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        [theme.breakpoints.down(376)]: {
          maxWidth: "250px",
        },
        [theme.breakpoints.down(321)]: {
          maxWidth: "200px",
        },
      },
      "& img": {
        width: "300px",
        height: "auto",
        marginTop: "7%",
        marginBottom: "10%",
        [theme.breakpoints.down(376)]: {
          width: "280px",
        },
        [theme.breakpoints.down(321)]: {
          width: "230px",
        },
      },
    },
  };
};

export default getStyles;
