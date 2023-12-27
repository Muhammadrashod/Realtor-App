import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import Logo from "../../components/UI/Logo/Logo";

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
      <Logo />
      <Cards />
    </Container>
  );
};
