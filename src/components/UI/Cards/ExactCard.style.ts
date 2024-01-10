// ExactCard.style.ts

import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

export const StyledExactCard = styled(Card)(({ theme }) => ({
  marginLeft: "250px",
  marginTop: "-125px",
  width: "55%",
  height: "55%", 
  borderRadius: 0,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
}));

export const StyledCardMedia = styled("img")({
  flex: 1, 
  width: "100%",
  objectFit: "cover",
});

export const StyledCardContent = styled("div")({
  padding: "16px",
});

export const StyledTypography = styled("div")({
  marginBottom: "8px",
});

export const StyledCardActions = styled("div")({
  padding: "16px",
});

export const DateOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  left: theme.spacing(1),
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
  zIndex: 1,
}));

export const ExpandMoreStyled = styled(IconButton)({
  marginLeft: "auto",
  transform: "rotate(0deg)",
  transition: "transform 0.3s",
});

