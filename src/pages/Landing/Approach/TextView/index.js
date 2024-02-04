import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { FEATURES } from "../constants";
import { InView } from "react-intersection-observer";

export const TextView = ({ setCurrItemIdx }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack spacing={{ xs: 6, md: 0 }}>
      {FEATURES.map(({ title, desc, image }, idx) => (
        <InView
          key={idx}
          threshold={0.5}
          onChange={(inView) => (inView ? setCurrItemIdx(idx) : "")}
        >
          {({ ref, inView }) => {
            return (
              <Stack
                justifyContent="center"
                key={idx}
                spacing={4}
                height={{ xs: "auto", md: "100vh" }}
              >
                <Stack ref={ref} spacing={2}>
                  <Typography
                    variant={md ? "h1" : "h2"}
                    fontWeight={600}
                    sx={{ opacity: 0.2 }}
                  >
                    {"0" + (idx + 1) + "."}
                  </Typography>
                  <Typography variant={md ? "h2" : "h3"} fontWeight={600}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    color="text.secondary"
                  >
                    {desc}
                  </Typography>
                </Stack>
                {!md && (
                  <img
                    src={image}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt=""
                  />
                )}
              </Stack>
            );
          }}
        </InView>
      ))}
    </Stack>
  );
};
