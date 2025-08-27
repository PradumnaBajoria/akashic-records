import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AnimeCard from "./AnimeCard";

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
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 1,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {data.map((anime) => (
          <Box key={anime.id} sx={{ flexShrink: 0 }}>
            <AnimeCard id={anime.id} title={anime.title} imageUrl={anime.imageUrl} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalAnimeList;
