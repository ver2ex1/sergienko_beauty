import theme from "config/theme";

const getStyles = () => {
  return {
    wrapper: {
      paddingTop: "2%",
      paddingBottom: "1%",
      [theme.breakpoints.down(426)]: {
        paddingTop: "15%",
      },
      [theme.breakpoints.down(321)]: {
        paddingTop: "25%",
      },

      "& .slick-slider": {
        margin: "auto",
        maxWidth: "90%",
        [theme.breakpoints.down(769)]: {
          maxWidth: "80%",
          paddingTop: "5%",
        },
      },
    },
  };
};

export default getStyles;
