import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface AnimeCardProps {
  id: number;
  title: string;
  imageUrl: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ id, title, imageUrl }) => {
  return (
    <Card
      key={id}
      sx={{
        width: 140,
        margin: 0.5,
        boxShadow: 2,
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "0.2s",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: "cover", borderRadius: "4px" }}
      />
      <CardContent sx={{ padding: "4px" }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 500,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
