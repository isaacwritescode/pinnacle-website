import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const CustomAccordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    sx={{
      "&.Mui-expanded": {
        bgcolor: "#00000010",
        borderRadius: 4,
      },
      bgcolor: "transparent",
      borderRadius: 0,
    }}
    {...props}
  />
))(({ theme, expanded, md }) => ({
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    color: "white.main",
    marginLeft: theme.spacing(1),
  },
  padding: md ? theme.spacing(4) : theme.spacing(1),
}));

const AccordionSummary = styled(({ expanded, ...props }) => (
  <MuiAccordionSummary
    expandIcon={
      expanded ? (
        <RemoveCircleOutline
          sx={{
            fontSize: "1.5rem",
            color: "black.main",
          }}
        />
      ) : (
        <AddCircleOutline
          sx={{
            fontSize: "1.5rem",
            color: "black.main",
          }}
        />
      )
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  "& .MuiAccordionSummary-content > *": {
    fontWeight: 600,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Accordion({ title, desc, expanded, onChange }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <CustomAccordion expanded={expanded} onChange={onChange} md={md}>
      <AccordionSummary expanded={expanded}>
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
          {desc}
        </Typography>
      </AccordionDetails>
    </CustomAccordion>
  );
}
