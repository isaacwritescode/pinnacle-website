import { Box, Stack } from "@mui/material";
import SPONSORS from "./constants";
import Marquee from "react-fast-marquee";

const Sponsors = ({ brand }) => {
  return (
    <Box bgcolor="white" id="sponsors">
      <Box maxWidth={1000} width="100%" m="auto">
        <Stack
          py={8}
          gap={4}
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent={{ md: "space-between" }}
        >
          <Marquee>
            {SPONSORS.map(({ src }, idx) => (
              <Box px={2}>
                <img
                  src={src}
                  height={56}
                  idx={idx}
                  alt={brand}
                  style={{ filter: "grayscale(1)" }}
                />
              </Box>
            ))}
          </Marquee>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sponsors;
