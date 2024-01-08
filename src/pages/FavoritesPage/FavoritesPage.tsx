import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { CardItem } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import { Header } from "../../components/UI/Header/Header";
import { Heading } from "../../components/Typography/Heading";
import { StyledFavoritesPage, FavoriteCardsContainer } from "./FavoritesPage.style";

export const FavoritesPage = () => {
  const savedCards = localStorage.getItem("favorites");

  return (
    <>
      <Header />
      <Container>
        <StyledFavoritesPage>
          <Heading headingText="Ваши Избранные Предложения" />
          <FavoriteCardsContainer>
            {localStorage?.savedCards &&
              localStorage.savedCards.map((card: CardItem) => (
                <Cards
                  key={localStorage.id}
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
          </FavoriteCardsContainer>
        </StyledFavoritesPage>
      </Container>
    </>
  );
};
