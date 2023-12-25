import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import Navbar from "../../components/UI/Navbar/Navbar";
import { useGetForSaleQuery } from "../../store/API/saleApi";

export const MainPage = () => {
  const { data, error, isLoading } = useGetForSaleQuery("");

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (error) {
      console.error(error);
    }
  }, [data, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Navbar />
      <h1>MainPage</h1>
    </Container>
  );
};
