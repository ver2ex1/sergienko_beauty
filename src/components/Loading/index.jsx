import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const styles = {
  absolute: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginRight: "50%",
  },
  static: {
    display: "flex",
  },
};

const Loading = ({ position = "absolute" }) => {
  return (
    <Box sx={styles[position]}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
