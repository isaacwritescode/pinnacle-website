import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { FEATURES } from "../constants";

export const ImageView = ({ currItemIdx }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        zIndex: 9,
      }}
    >
      <Stack
        justifyContent="center"
        sx={{ position: "relative", height: "100vh" }}
      >
        {FEATURES.map(({ image }, idx) => (
          <img
            src={image}
            className={idx === currItemIdx ? "fade-in" : ""}
            style={{
              position: "absolute",
              transform: "scale(0.7)",
              opacity: 0,
              visibility: "hidden",
              width: "100%",
              height: "auto",
            }}
            alt=""
          />
        ))}
      </Stack>
    </Box>
  );
};
