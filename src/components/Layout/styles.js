const getStyles = () => {
  return {
    header: {
      padding: "2%",
      display: "flex",
      boxShadow: "0 -6px 10px 5px rgba(0,0,0,0.5)",
      alignItems: "center",
    },
    title: {
      flex: 1,
      cursor: "pointer",
    },
    navigation: {
      display: "flex",
      gap: "20px",
    },
    defaultLink: {
      color: "#595244",
      textDecoration: "none",
    },
    activeLink: {
      color: "#595244",
    },
  };
};

export default getStyles;
