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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Bangers', cursive",
            color: "primary.main"
          }}
        >
          {title}
        </Typography>
        <Button size="small" onClick={onSeeMore} sx={{ textTransform: "none" }}>
          See More →
        </Button>
      </Box>

      <Box sx={{ display: "flex", overflowX: "auto", gap: 2, pb: 1 }}>
        {data.map((anime) => (
          <AnimeCard key={anime.id} id={anime.id} title={anime.title} imageUrl={anime.imageUrl} />
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalAnimeList;
