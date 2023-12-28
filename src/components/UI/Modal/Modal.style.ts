import styled from "styled-components";
import Box from "@mui/material/Box";

export const StyledModalContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ensure modal takes full height */
  backdrop-filter: blur(3px);
`;

export const StyledModalContent = styled(Box)`
  background-color: whitesmoke;
  padding: 20px;
  outline: none;
  border-radius: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInputDiv = styled.div`
  margin-top: 28px;
  color: black;
`;
