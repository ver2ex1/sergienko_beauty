import { Box, Button, TextField } from "@mui/material";
import adminStore from "stores/adminStore";
import { useForm } from "react-hook-form";
import getStyles from "./styles";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { login } = adminStore;
  const navigate = useNavigate();
  const classes = getStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((payload) => login({ payload, navigate }));
  return (
    <form onSubmit={onSubmit} style={classes.wrapper}>
      <TextField placeholder="username" {...register("username")} />
      <TextField placeholder="password" {...register("password")} />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default AdminLogin;
