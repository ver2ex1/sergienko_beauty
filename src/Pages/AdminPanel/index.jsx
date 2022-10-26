import { useEffect } from "react";
import {
  Box,
  LinearProgress,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import imageStore from "stores/imageStore";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";

import getStyles from "./style";

const AdminPanel = () => {
  const { images, getImages, deleteImage, createImage, isLoadingImages } =
    imageStore;
  const classes = getStyles();
  useEffect(() => {
    getImages();
  }, []);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { iamge: "", description: "" },
  });
  const onUpdatePhoto = (event) => {
    if (!event.target.files || !event.target.files[0]) {
      return;
    }
    setValue("image", event.target.files[0]);
  };
  const onSubmit = handleSubmit((payload) => {
    createImage({ payload, callback: () => getImages() });
  });
  const handleDelete = (id) => {
    console.log(id);
    deleteImage({ id, callback: () => getImages() });
  };
  if (isLoadingImages) {
    return <LinearProgress />;
  }
  console.log(images);
  return (
    <Box sx={classes.wrapper}>
      <Box sx={classes.uploadSection}>
        <Typography variant="h3">Upload image</Typography>
        <form onSubmit={onSubmit} style={classes.form}>
          <input
            type="file"
            id="uploadInput"
            accept="image/*"
            onChange={onUpdatePhoto}
            required
          />
          <TextField
            label="Description"
            {...register("description")}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Create Image
          </Button>
        </form>
      </Box>
      <Box sx={classes.deleteSection}>
        <Typography variant="h5">Here you can delete image</Typography>
        {images.map((item) => {
          return (
            <Box sx={classes.imageWithDescription} key={item._id}>
              <img
                src={item.image}
                style={{ minWidth: "100px" }}
                width="100px"
                height="100px"
                alt="image"
              />
              <Typography>
                <b> Description:</b>
                {item.description}
              </Typography>
              <DeleteIcon
                onClick={() => handleDelete(item._id)}
                sx={{ cursor: "pointer", color: "red" }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default observer(AdminPanel);
