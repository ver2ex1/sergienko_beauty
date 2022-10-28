import { Box, Typography } from "@mui/material";
import getStyles from "./style";

const AboutPage = () => {
  const classes = getStyles();
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.content}>
        <Typography variant="h5">About</Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iure, earum illo magni ex recusandae id consequuntur ut tempore
          sapiente, perspiciatis asperiores, sequi a illum officiis esse est
          corporis quis?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel
          nobis velit neque officia vero incidunt officiis fuga id voluptatibus
          reiciendis repudiandae magni, repellendus rerum possimus nihil,
          laborum necessitatibus placeat consectetur consequuntur, blanditiis
          dolore commodi error. Ut ducimus fugiat eaque deserunt laudantium
          reprehenderit, eligendi, porro odit assumenda commodi officiis nihil.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
