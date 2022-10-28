import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "config/axios";
import { toast } from "react-toastify";

class ImageStore {
  images = [];
  isLoadingImages = false;

  constructor() {
    makeObservable(this, {
      isLoadingImages: observable.ref,
      getImages: action,
      deleteImage: action,
      createImage: action,
      images: observable.ref,
    });
  }

  getImages = () => {
    runInAction(() => {
      this.isLoadingImages = true;
    });

    axios
      .get("/images")
      .then(({ data }) => {
        this.images = data;

        runInAction(() => {
          this.isLoadingImages = false;
        });
      })
      .catch(() => {
        toast.error("Failed to fetch images");
        runInAction(() => {
          this.isLoadingImages = false;
        });
      });
  };

  createImage = ({ payload, callback }) => {
    const formdata = new FormData();
    formdata.append("image", payload.image);
    formdata.append("description", payload.description);
    formdata.append("folder", payload.folder);
    axios
      .post("/images", formdata, {
        Headers: {
          "Content-Type": "multipart/form-data",
          Accept: "multipart/form-data",
        },
      })
      .then(({}) => {
        toast.success("Successfully upload new image");
        callback && callback();
      })
      .catch(() => {
        toast.error("Failed to create image");
      });
  };

  deleteImage = ({ id, callback }) => {
    runInAction(() => {
      this.isLoadingImages = true;
    });

    axios
      .delete(`/images/${id}`)
      .then(({}) => {
        toast.success("Image succesfully deleted");
        callback && callback();

        runInAction(() => {
          this.isLoadingImages = false;
        });
      })
      .catch(() => {
        toast.error("Failed to fetch images");
        runInAction(() => {
          this.isLoadingImages = false;
        });
      });
  };
}

export default new ImageStore();
