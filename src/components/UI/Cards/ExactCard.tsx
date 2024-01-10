// ExactCard.tsx

import { Typography } from "@mui/material";
import React, { useState } from "react";
import type { CardItem } from "../../../store/API/saleApi";
import {
  StyledExactCard,
  StyledCardMedia,
  StyledCardContent,
  StyledCardActions,
  DateOverlay,
  ExpandMoreStyled,
  StyledTypography,
} from "./ExactCard.style";

export interface ICardsProps {
  card: CardItem;
}

const ExactCard = ({
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
  return (
    <StyledExactCard>
      <StyledCardMedia
        src={coverPhoto.url}
        alt="Property Image"
      />
      <StyledCardContent>
        <StyledTypography>
          <Typography variant="body2" color="text.primary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </StyledTypography>
      </StyledCardContent>
      <StyledCardActions>
        {/* Add any specific actions if needed */}
      </StyledCardActions>
      <StyledCardContent>
        <StyledTypography>
          <Typography paragraph>Детали:</Typography>
          <Typography paragraph>{rooms}</Typography>
          <Typography paragraph>{baths}</Typography>
          <Typography paragraph>{area}</Typography>
          <Typography paragraph>{location.level}</Typography>
          <Typography paragraph>{location.name}</Typography>
          <Typography paragraph>{phoneNumber.mobile}</Typography>
          <Typography>{contactName}</Typography>
        </StyledTypography>
      </StyledCardContent>
    </StyledExactCard>
  );
};

export default ExactCard;
