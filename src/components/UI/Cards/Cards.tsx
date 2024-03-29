import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { CardItem } from "../../../store/API/saleApi";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import { Tooltip } from "@mui/material";
import { StyledCard, DateOverlay, ExpandMoreStyled } from "./Cards.style";

export interface ICardsProps {
  card: CardItem;
}

export const Cards = ({
  id,
  state,
  price,
  purpose,
  title,
  location,
  rooms,
  baths,
  area,
  coverPhoto,
  phoneNumber,
  contactName,
}: CardItem) => {
  const favouritesList = {
    id,
    state,
    price,
    purpose,
    title,
    location,
    rooms,
    baths,
    area,
    coverPhoto,
    phoneNumber,
    contactName,
  };

  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(favouritesList));
  }, [favouritesList]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = isFavorite
      ? favorites.filter(
          (favId: any) => favId === favouritesList
        )
      : [...favorites, favouritesList];

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  console.log(
    isFavorite
      ? `Added card with ID ${id && state && purpose && rooms} from favorites.`
      : `Removed card with ID ${id && state && purpose && rooms} to favorites.`
  );

  const handleGoToCard = () => {
    navigate(`/card/${id}`);
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
        <ExpandMoreStyled
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMoreStyled>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Tooltip
            title={isFavorite ? "Удалить С Избранных" : "Добавить В Избранные"}
          >
            <IconButton
              aria-label="Add to favorites"
              onClick={handleToggleFavorite}
            >
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Открыть Карточку">
            <IconButton aria-label="Go To Card" onClick={handleGoToCard}>
              <ViewDayIcon />
            </IconButton>
          </Tooltip>
          {/* <Typography paragraph>Детали:</Typography>
          <Typography paragraph>{rooms}</Typography>
          <Typography paragraph>{baths}</Typography>
          <Typography paragraph>{area}</Typography>
          <Typography paragraph>{location.level}</Typography>
          <Typography paragraph>{location.name}</Typography>
          <Typography paragraph>{phoneNumber.mobile}</Typography>
          <Typography>{contactName}</Typography> */}
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default Cards;
