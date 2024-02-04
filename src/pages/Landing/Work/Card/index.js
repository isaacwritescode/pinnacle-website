import { Box, Chip, Stack, Typography } from "@mui/material";

const Card = ({ img, title, desc, tags, color }) => {
  return (
    <Stack
      spacing={3}
      pb={2}
      sx={{
        transition: "all ease 0.3s",
        cursor: "pointer",
        "div:first-child img": {
          transition: "all ease 0.3s",
        },
        "&:hover div:first-child img": {
          transform: "scale(1.1)",
          bgcolor: color,
        },
        "& > div:first-child": {
          bgcolor: "#ffffff10",
          transition: "all ease 0.3s",
        },
      }}
    >
      <Box overflow="hidden" width="100%">
        <img src={img} width="100%" alt={title} />
      </Box>
      <Stack direction="row" spacing={2} px={2}>
        {tags.map((item, idx) => (
          <Chip key={idx} label={item} />
        ))}
      </Stack>
      <Stack spacing={1} px={2}>
        <Typography variant="h4" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {desc}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Card;
