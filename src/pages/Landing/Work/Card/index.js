import { Chip, Stack, Typography } from "@mui/material";

const Card = ({ img, title, desc, tags }) => {
  return (
    <Stack spacing={3}>
      <img src={img} width="100%" />
      <Stack direction="row" spacing={2}>
        {tags.map((item, idx) => (
          <Chip key={idx} label={item} />
        ))}
      </Stack>
      <Stack spacing={1}>
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
