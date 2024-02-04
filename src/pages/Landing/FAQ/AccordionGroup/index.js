import { Box, Stack } from "@mui/material";
import Accordion from "../../../../components/Accordion";
import { FAQ_ITEMS } from "../constants";

export const AccordionGroup = ({ handleChange, expanded }) => {
  return (
    <Stack spacing={0}>
      {FAQ_ITEMS.map(({ title, desc }, idx) => (
        <Box key={idx} data-sal="slide-up" data-sal-delay={idx * 100}>
          <Accordion
            title={title}
            desc={desc}
            onChange={handleChange(`panel${idx}`)}
            expanded={expanded === `panel${idx}`}
          />
        </Box>
      ))}
    </Stack>
  );
};
