import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { CardItem, useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import Logo from "../../components/UI/Logo/Logo";

export const MainPage = () => {
  const { data, error, isLoading } = useGetForSaleQuery({
    locationExternalIDs: "5002,6020",
  });

  if (data) {
    console.log(data);
  }

  if (error) {
    console.error(error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Logo />
      {data?.results &&
        data.results.map((card: CardItem) => (
          <Cards
            key={card.id}
            card={card}           
          />
        ))}
    </Container>
  );
};
