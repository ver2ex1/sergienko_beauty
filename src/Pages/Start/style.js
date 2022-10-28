import entryPageBackground from "images/background.jpg";

const getStyles = () => {
  return {
    wrapper: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffff",
      backgroundImage: `url(${entryPageBackground})`,
      imageRendering: "-webkit-optimize-contrast",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "left",
      textAlign: "center",
      gap: "10px",
    },
    button: {
      fontWeight: 600,
      fontSize: "18px",
      color: "#fff",
      textTransform: "none",
      border: "2px solid #fff",
      padding: "1% 3%",
      marginTop: "2%",
      "&:hover": {
        border: "2px solid #D2D4DA",
        opacity: 0.7,
      },
    },
  };
};

export default getStyles;
