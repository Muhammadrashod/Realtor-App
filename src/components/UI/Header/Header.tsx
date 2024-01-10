import React from "react";
import { AvatarContainer, StyledHeader } from "./Header.style";
import Logo from "../Logo/Logo";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/profile");
  };



  return (
    <StyledHeader>
      <>
        <Logo />
      </>
      <AvatarContainer>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Перейти В Профиль">
            <IconButton onClick={handleGoToProfile} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Box>
      </AvatarContainer>
    </StyledHeader>
  );
};
