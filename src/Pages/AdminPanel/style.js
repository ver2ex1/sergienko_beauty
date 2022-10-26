const getStyles = () => {
  return {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "5%",
    },
    uploadSection: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    deleteSection: {
      "& h5": {
        marginBottom: "10px",
        marginTop: "20px",
      },
      display: "flex",
      flexDirection: "column",
    },
    imageWithDescription: {
      display: "flex",
      gap: "10px",
      marginBottom: "10px",
      alignItems: "center",
    },
  };
};

export default getStyles;
