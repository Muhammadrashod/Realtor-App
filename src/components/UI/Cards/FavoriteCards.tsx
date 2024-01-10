import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { FavoriteCardItem } from "../../../store/API/saleApi";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import { Tooltip } from "@mui/material";
import { StyledCard, DateOverlay } from "./Cards.style";

export interface ICardsProps {
  favoritecard: FavoriteCardItem;
}

export const FavoriteCards = ({
  objectID,
  state,
  price,
  purpose,
  title,
  rooms,
  baths,
  area,
  coverPhoto,
  phoneNumber,
  contactName,
}: FavoriteCardItem) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(objectID));
  }, [objectID]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = isFavorite
      ? favorites.filter((favId: number) => favId === objectID)
      : [...favorites, objectID];

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  console.log(
    isFavorite
    ? `Removed card with ID ${objectID} from favorites.`
    : `Added card with ID ${objectID} to favorites.`
  );

  const handleGoToProfile = () => {
    navigate(`/card/${objectID}`);
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt="Property Image"
      />
      <DateOverlay></DateOverlay>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     
      </CardActions>
        <CardContent>
          <Tooltip
            title={isFavorite ? "Добавить В Избранные" : "Удалить С Избранных"}
          >
            <IconButton
              aria-label="Add to favorites"
              onClick={handleToggleFavorite}
            >
              {isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Открыть Карточку">
            <IconButton aria-label="Go To Card" onClick={handleGoToProfile}>
              <ViewDayIcon />
            </IconButton>
          </Tooltip>
          <Typography paragraph>Детали:</Typography>
          <Typography paragraph>{rooms}</Typography>
          <Typography paragraph>{baths}</Typography>
          <Typography paragraph>{area}</Typography>
          <Typography paragraph>{phoneNumber?.mobile}</Typography>
          <Typography>{contactName}</Typography>
        </CardContent>
    </StyledCard>
  );
};

export default FavoriteCards;
