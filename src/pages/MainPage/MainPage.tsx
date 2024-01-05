import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { CardItem, useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import Logo from "../../components/UI/Logo/Logo";

export const MainPage = () => {
  const { data, error, isLoading } = useGetForSaleQuery("5002,6020");

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
      {data?.hits &&
        data.hits.map((card: CardItem) => (
          <Cards
            key={card.id}
            id={card.id}
            state={`Активность: ${card.state}`}
            price={`Цена: ${card.price}`}
            purpose={card.purpose}
            title_13={card.title_13}
            location={{
              level: 0,
              name: "",
            }}
            rooms={card.rooms}
            baths={card.baths}
            area={`Площадь: ${card.area}`}
            coverPhoto={{
              id: 0,
              url: "",
              main: false,
            }}
            phoneNumber={{
              mobile: 0,
              phone: 0,
            }}
            contactName={`Имя Продовца: ${card.contactName}`}
          />
        ))}
    </Container>
  );
};
