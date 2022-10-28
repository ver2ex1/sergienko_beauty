import { Box, Typography } from "@mui/material";

const Page404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h2">Not existing page</Typography>
    </Box>
  );
};

export default Page404;
