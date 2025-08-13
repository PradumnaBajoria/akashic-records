import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

interface AnimeItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  title: string;
  data: AnimeItem[];
  onSeeMore: () => void;
}

const HorizontalAnimeList: React.FC<Props> = ({ title, data, onSeeMore }) => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Section Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Bangers', cursive", // anime-style font
            color: "primary.main"
          }}
        >
          {title}
        </Typography>
        <Button size="small" onClick={onSeeMore} sx={{ textTransform: "none" }}>
          See More →
        </Button>
      </Box>

      {/* Horizontal Scroll */}
      <Box sx={{ display: "flex", overflowX: "auto", gap: 2, pb: 1 }}>
        {data.map((anime) => (
          <Card
            key={anime.id}
            sx={{
              minWidth: 140,
              maxWidth: 140,
              backgroundColor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
              flexShrink: 0
            }}
          >
            <CardMedia
              component="img"
              image={anime.imageUrl}
              alt={anime.title}
              sx={{ height: 190, objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <CardContent sx={{ p: 1 }}>
              <Typography variant="body2" noWrap>
                {anime.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalAnimeList;
