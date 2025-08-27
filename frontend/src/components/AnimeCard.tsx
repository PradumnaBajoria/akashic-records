import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface AnimeCardProps {
  id: number;
  title: string;
  imageUrl: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ id, title, imageUrl }) => {
  const location = useLocation();

  return (
    <Card
      component={Link}
      to={`/anime/${id}`}
      state={{ backgroundLocation: location }}
      sx={{
        minWidth: 120,
        maxWidth: 120,
        textDecoration: "none",
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 2,
        flexShrink: 0,
        color: "inherit"
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{ height: 150, objectFit: "cover" }}
      />
      <CardContent sx={{ p: 1 }}>
        <Typography variant="body2" noWrap>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
