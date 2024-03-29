import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import {
  FavoriteCardItem,
  useGetExactCardQuery,
} from "../../store/API/saleApi";
import FavoriteCards from "../../components/UI/Cards/FavoriteCards";
import { Header } from "../../components/UI/Header/Header";
import { Heading } from "../../components/Typography/Heading";
import {
  StyledFavoritesPage,
  FavoriteCardsContainer,
} from "./FavoritesPage.style";

export const FavoritesPage = () => {
  const { data, error, isLoading } = useGetExactCardQuery("4937770");

  if (data) {
    console.log(data);
  }

  if (error) {
    console.error(error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const savedCards = localStorage.getItem("favorites");
  console.log(savedCards)
  const parsedSavedCards = savedCards ? JSON.parse(savedCards) : [];

  console.log(savedCards);

  return (
    <>
      <Header />
      <Container>
        <StyledFavoritesPage>
          <Heading headingText="Ваши Избранные Предложения" />
          <FavoriteCardsContainer>
            {data?.id &&
              parsedSavedCards.map((favoritecard: FavoriteCardItem) => (
                <FavoriteCards
                  key={favoritecard.objectID} 
                  objectID={favoritecard.objectID}
                  state={`Активность: ${favoritecard.state}`}
                  price={`Цена: ${favoritecard.price}`}
                  purpose={`Цель: ${favoritecard.purpose}`}
                  title={favoritecard.title}
                  rooms={`Комнаты: ${favoritecard.rooms}`}
                  baths={`Ванные Комнаты: ${favoritecard.baths}`}
                  area={`Площадь: ${favoritecard.area}`}
                   coverPhoto={{
                    id: favoritecard.coverPhoto?.id || "",
                    url: favoritecard.coverPhoto?.url || "",
                  }}
                  phoneNumber={favoritecard.phoneNumber}
                  contactName={`Имя Продовца: ${favoritecard.contactName}`}
                />
              ))}
          </FavoriteCardsContainer>
        </StyledFavoritesPage>
      </Container>
    </>
  );
};
