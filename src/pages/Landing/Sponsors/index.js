import { Box, Stack, useMediaQuery } from "@mui/material";
import SPONSORS from "./constants";
import { useTheme } from "@emotion/react";
import Marquee from "react-fast-marquee";

const Sponsors = ({ brand }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box maxWidth={1000} width="100%" m="auto">
      <Stack
        py={8}
        gap={4}
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={{ md: "space-between" }}
      >
        {md ? (
          SPONSORS.map(({ src }, idx) => (
            <Box data-sal="slide-up" data-sal-delay={100 * idx}>
              <img src={src} idx={idx} alt={brand} />
            </Box>
          ))
        ) : (
          <Marquee>
            {SPONSORS.map(({ src }, idx) => (
              <Box px={2}>
                <img src={src} idx={idx} alt={brand} />
              </Box>
            ))}
          </Marquee>
        )}
      </Stack>
    </Box>
  );
};

export default Sponsors;
