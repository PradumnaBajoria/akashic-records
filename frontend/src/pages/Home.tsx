import React, { useEffect, useState } from "react";
import HorizontalAnimeList from "../components/HorizontalAnimeList";
import AnimeTable from "../components/AnimeTable";
import {
  getWatchingAnime,
  getPlanToWatchAnime,
  getOnHoldAnime,
  getAllAnime
} from "../services/api";
import { Box } from "@mui/material";

const HomePage: React.FC = () => {
  const [watchingList, setWatchingList] = useState<any[]>([]);
  const [planList, setPlanList] = useState<any[]>([]);
  const [onHoldList, setOnHoldList] = useState<any[]>([]);
  const [allList, setAllList] = useState<any[]>([]);

  useEffect(() => {
    getWatchingAnime().then((data: any) => setWatchingList(data));
    getPlanToWatchAnime().then((data: any) => setPlanList(data));
    getOnHoldAnime().then((data: any) => setOnHoldList(data));
    getAllAnime().then((data: any) => setAllList(data));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        px: 3,
        py: 4
      }}
    >
      <HorizontalAnimeList title="Watching" data={watchingList} onSeeMore={() => {}} />
      <HorizontalAnimeList title="Plan to Watch" data={planList} onSeeMore={() => {}} />
      <HorizontalAnimeList title="On Hold" data={onHoldList} onSeeMore={() => {}} />
      <AnimeTable data={allList} />
    </Box>
  );
};

export default HomePage;
