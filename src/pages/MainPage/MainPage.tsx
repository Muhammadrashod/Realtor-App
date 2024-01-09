import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { CardItem, useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import { CardsContainer, StyledMainPage } from "./MainPage.style";
import { Header } from "../../components/UI/Header/Header";
import { Heading } from "../../components/Typography/Heading";
import { Link } from "../../components/UI/Link/Link";

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
       <Link href="/main" text="Купить"/>
       <Link href="/profile" text="Продать"/>
       <Link href="/favorites" text="Избранные"/>
          <Heading headingText="Дома В Продаже" />
          <CardsContainer>
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
                    level: card.location.level,
                    name: card.location.name,
                  }}
                  rooms={`Количество Комнат: ${card.rooms}`}
                  baths={`Количество Ванных Комнат: ${card.baths}`}
                  area={`Площадь: ${card.area}`}
                  coverPhoto={{
                    id: card.coverPhoto.id,
                    url: card.coverPhoto.url,
                  }}
                  phoneNumber={card.phoneNumber}
                  contactName={`Имя Продовца: ${card.contactName}`}
                />
              ))}
          </CardsContainer>
        </StyledMainPage>
      </Container>
    </>
  );
};
