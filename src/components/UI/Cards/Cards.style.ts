import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  maxWidth: 345,
  marginTop: 3,
  borderRadius: "30px",
  overflow: "hidden",
  transition: "transform 0.3s, border 0.3s",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  "&:hover, &:active, &:focus": {
    border: "2px solid #3f51b5",
    transform: "scale(1.05)",
  },
}));

export const DateOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  left: theme.spacing(1),
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
  zIndex: 1,
}));

export const ExpandMoreStyled = styled(IconButton)<ExpandMoreProps>(
  ({ expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
  })
);
