import { Box, Typography } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import getStyles from "./style";

const AboutPage = () => {
  const classes = getStyles();
  const { width } = useWindowSize();
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.content}>
        <Typography variant="h5">About</Typography>
        <Typography variant={width < 425 ? "body2" : "body1"}>
          Born and raised in Ukraine. Alexandra is currently in Europe.
          Alexandra has been interested in the world of fashion, beauty and
          style since childhood.
          <br />
          <br />
          Confidence, perseverance and achieving goals helped to acquire sport.
          But she was always drawn to creativity and after 3 months of working
          as a makeup artist, she was able to work at a private Fashion Week in
          Paris.
          <br />
          <br />
          Thanks to her parents, Alexandra traveled a lot and learned all the
          beauties of different countries and their culture. This formed her
          love for learning something new and understanding that you can combine
          work and travel. But at the same time, she always show all the
          uniqueness of ideas in your work.
          <br />
          <br />
          Skills that have been acquired and remain with Alexandra always both
          in life and in work: “always try to be 101%, never stop and develop
          for yourself” to keep abreast of current trends and promote your
          vision.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
