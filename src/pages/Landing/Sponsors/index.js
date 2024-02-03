import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";

const Sponsors = () => {
  return (
    <Box maxWidth={1000} width={{ xs: "90%", md: "100%" }} m="auto">
      <Stack
        py={8}
        gap={4}
        direction="row"
        justifyContent={{ md: "space-between" }}
        flexWrap="wrap"
      >
        {SPONSORS.map(({ src }, idx) => (
          <img src={src} idx={idx} />
        ))}
      </Stack>
    </Box>
  );
};

export default Sponsors;
