import { useEffect } from "react";
import imageStore from "stores/imageStore";
import { Box } from "@mui/material";
import CardCarousel from "components/CardCarousel";
import Loading from "components/Loading";
import { observer } from "mobx-react-lite";

import getStyles from "./style";

const WeddingPage = () => {
  const { getImages, images, isLoadingImages } = imageStore;
  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = getStyles();
  if (isLoadingImages) {
    return <Loading />;
  }
  return (
    <Box sx={classes.wrapper}>
      <CardCarousel data={images.filter((item) => item.folder === "wedding")} />
    </Box>
  );
};

export default observer(WeddingPage);
