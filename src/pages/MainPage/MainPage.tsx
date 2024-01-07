import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { CardItem, useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import { StyledMainPage } from "./MainPage.style";
import { Header } from "../../components/UI/Header/Header";

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
    <>
      <Header />
      <Container>
        <StyledMainPage>
          {data?.hits &&
            data.hits.map((card: CardItem) => (
              <Cards
                key={card.id}
                id={card.id}
                state={`Активность: ${card.state}`}
                price={`Цена: ${card.price}`}
                purpose={`Цель: ${card.purpose}`}
                title={card.title}
                location={{
                  level: 0,
                  name: "",
                }}
                rooms={`Количество Комнат: ${card.rooms}`}
                baths={`Количество Ванных Комнат: ${card.baths}`}
                area={`Площадь: ${card.area}`}
                coverPhoto={{
                  id: 0,
                  url: "/testhouse.jpg",
                  main: false,
                }}
                phoneNumber={{
                  mobile: 0,
                  phone: 0,
                }}
                contactName={`Имя Продовца: ${card.contactName}`}
              />
            ))}
        </StyledMainPage>
      </Container>
    </>
  );
};
