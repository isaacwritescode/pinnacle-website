import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { AccordionGroup } from "./AccordionGroup";

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box width="100%" py={12} id="FAQ" bgcolor="white">
      <Box width={{ xs: "90%", lg: "70%" }} m="auto">
        <Box>
          <Stack spacing={8}>
            <Box data-sal="slide-up" data-sal-delay="100">
              <Typography
                variant={sm ? "h1" : "h2"}
                textAlign="center"
                fontWeight={600}
              >
                FAQ
              </Typography>
            </Box>
            <AccordionGroup expanded={expanded} handleChange={handleChange} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
