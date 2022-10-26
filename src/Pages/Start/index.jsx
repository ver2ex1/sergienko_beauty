import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { publicPaths } from "routes";
import getStyles from "./style";

const Start = () => {
  const classes = getStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(publicPaths.about, { replace: true });
  };
  return (
    <Box sx={classes.wrapper}>
      <Typography variant="h3">Alexandra Sergiienko</Typography>
      <Typography variant="h6">Artist</Typography>
      <Button variant="outlined" sx={classes.button} onClick={handleClick}>
        Enter
      </Button>
    </Box>
  );
};

export default Start;
