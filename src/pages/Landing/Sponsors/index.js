import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";

const Sponsors = ({ brand }) => {
  return (
    <Box maxWidth={1000} width={{ xs: "90%", md: "100%" }} m="auto">
      <Stack
        py={8}
        gap={4}
        direction="row"
        flexWrap="wrap"
        justifyContent={{ md: "space-between" }}
      >
        {SPONSORS.map(({ src }, idx) => (
          <img src={src} idx={idx} alt={brand} />
        ))}
      </Stack>
    </Box>
  );
};

export default Sponsors;
