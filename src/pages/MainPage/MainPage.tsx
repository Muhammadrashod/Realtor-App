import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import Navbar from "../../components/UI/Navbar/Navbar";
import { useGetForSaleQuery } from "../../store/API/saleApi";

export const MainPage = () => {
  const {data, isLoading, error} = useGetForSaleQuery("5002,6020")

  if(data) {
    console.log(data)
  }
  if(error) {
    console.log(error)
  }
  return (
    <Container>
      {}
      <h1>MainPage</h1>
      <Navbar />
    </Container>
  );
};
