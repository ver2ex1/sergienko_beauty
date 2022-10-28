import theme from "config/theme";

const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      paddingTop: "10%",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      textAlign: "justify",
      maxWidth: "700px",
      "& h5": {
        marginBottom: "3%",
        fontWeight: 800,
      },
      [theme.breakpoints.down(426)]: {
        padding: "5%",
      },
    },
  };
};

export default getStyles;
