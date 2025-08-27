import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  MenuItem,
  TextField,
  Rating,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { allAnime } from "../mock/animeData";

const statuses = ["Watching", "Completed", "On Hold", "Dropped", "Plan to Watch"];

const AnimeDetailsModal: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const animeId = Number(id);

  // fetch anime details from mock data (later replace with API call)
  const anime = allAnime.find((a) => a.id === animeId);

  const [status, setStatus] = useState(anime?.status || "Watching");
  const [score, setScore] = useState(anime?.score || 0);

  const handleClose = () => {
    navigate(-1); // go back to previous route
  };

  const handleSave = () => {
    console.log("Updated:", { id: animeId, status, score });
    // TODO: replace with API call to save changes
    handleClose();
  };

  if (!anime) {
    return (
      <Dialog open onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Anime not found</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog open onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{anime.title}</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <img
            src={anime.imageUrl || "https://via.placeholder.com/150"}
            alt={anime.title}
            style={{
              width: 150,
              height: 200,
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
          <Typography variant="body2" sx={{ flex: 1 }}>
            {anime.description || "No description available."}
          </Typography>
        </Box>

        {/* Status Selection */}
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          margin="normal"
        >
          {statuses.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>

        {/* Rating */}
        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Rating</Typography>
          <Rating
            name="anime-rating"
            value={score}
            onChange={(_, newValue) => setScore(newValue || 0)}
            max={10}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AnimeDetailsModal;
