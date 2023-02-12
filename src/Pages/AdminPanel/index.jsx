import { useEffect } from "react";
import {
  Box,
  LinearProgress,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import imageStore from "stores/imageStore";
import adminStore from "stores/adminStore";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

import getStyles from "./style";
import useWindowSize from "hooks/useWindowSize";

const AdminPanel = () => {
  const { images, getImages, deleteImage, createImage, isLoadingImages } =
    imageStore;
  const { logout } = adminStore;
  const classes = getStyles();
  const navigate = useNavigate();
  useEffect(() => {
    getImages();
  }, []);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { image: "", description: "" },
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
  const handleDelete = (id, imageName) => {
    deleteImage({ id, imageName, callback: () => getImages() });
  };

  const handleLogout = () => {
    logout({ navigate });
  };

  const options = [
    { label: "Portfolio", value: "portfolio" },
    { label: "Runway", value: "runway" },
    { label: "Beauty", value: "beauty" },
    { label: "Wedding", value: "wedding" },
  ];

  const { width } = useWindowSize();

  if (isLoadingImages) {
    return <LinearProgress />;
  }
  return (
    <Box sx={classes.wrapper}>
      <Typography
        variant="h6"
        style={{ cursor: "pointer" }}
        onClick={handleLogout}
      >
        Log out
      </Typography>
      <Box sx={classes.uploadSection}>
        <Typography variant="h3">Upload image</Typography>
        <form onSubmit={onSubmit} style={classes.form}>
          <input
            type="file"
            id="uploadInput"
            onChange={onUpdatePhoto}
            required
          />
          <TextField label="Description" {...register("description")} />
          <Typography variant="body1">Choose section</Typography>
          <Select {...register("folder")} required defaultValue="portfolio">
            {options.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
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
                style={{
                  width: width > 426 ? "200px" : "100px",
                  height: "auto",
                  objectFit: "cover",
                }}
                alt="admin"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  <b> Description:</b>
                  {item.description}
                </Typography>
                <Typography>
                  <b> Section:</b>
                  {item.folder}
                </Typography>
                <DeleteIcon
                  onClick={() =>
                    handleDelete(
                      item._id,
                      item?.image
                        ?.split("/")
                        [item?.image?.split("/")?.length - 1]?.split(".")[0]
                    )
                  }
                  sx={{ cursor: "pointer", color: "red" }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default observer(AdminPanel);
