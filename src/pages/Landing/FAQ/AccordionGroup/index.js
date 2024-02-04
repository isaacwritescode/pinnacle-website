import { Stack } from "@mui/material";
import Accordion from "../../../../components/Accordion";
import { FAQ_ITEMS } from "../constants";

export const AccordionGroup = ({ handleChange, expanded }) => {
  return (
    <Stack spacing={0}>
      {FAQ_ITEMS.map(({ title, desc }, idx) => (
        <Accordion
          key={idx}
          title={title}
          desc={desc}
          onChange={handleChange(`panel${idx}`)}
          expanded={expanded === `panel${idx}`}
        />
      ))}
    </Stack>
  );
};
