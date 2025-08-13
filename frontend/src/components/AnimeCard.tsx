import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface AnimeCardProps {
  title: string;
  imageUrl: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ title, imageUrl }) => {
  return (
    <Card sx={{ width: 180, bgcolor: "background.paper" }}>
      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={title}
        sx={{ borderRadius: 1 }}
      />
      <CardContent>
        <Typography variant="subtitle2" noWrap>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
