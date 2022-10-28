import theme from "config/theme";

const getStyles = (width) => {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "85vh",
      gap: "30px",
    },
    messageWrapper: {
      display: "flex",
      flexDirection: "column",
    },
    textArea: {
      background: "#F7F4ED",
      height: "100px",
      width: width >= 768 ? "600px" : width >= 425 ? "400px" : "300px",
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    input: {
      width: "600px",
      [theme.breakpoints.down(426)]: {
        width: "400px",
      },
      [theme.breakpoints.down(376)]: {
        width: "300px",
      },
    },
    button: {
      textTransform: "none",
      color: "rgb(89, 82, 68)",
      borderColor: "rgb(89, 82, 68)",
      padding: "0.5% 2%",
      "&:hover": {
        borderColor: "rgb(89, 82, 68)",
      },
    },
  };
};

export default getStyles;
