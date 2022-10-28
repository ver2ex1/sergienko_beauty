import { useEffect } from "react";
import imageStore from "stores/imageStore";
import { Box } from "@mui/material";
import Carousel from "components/Carousel";
import Loading from "components/Loading";
import { observer } from "mobx-react-lite";

import getStyles from "./style";

const PortfolioPage = () => {
  const { getImages, images,isLoadingImages } = imageStore;
  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = getStyles();
  if(isLoadingImages){
    return <Loading/>
  }
  return (
    <Box sx={classes.wrapper}>
      <Carousel data={images} />
    </Box>
  );
};

export default observer(PortfolioPage);
