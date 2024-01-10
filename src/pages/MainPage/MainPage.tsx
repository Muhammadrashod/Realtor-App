import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { CardItem, useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import { CardsContainer, FavContainer, StyledMainPage } from "./MainPage.style";
import { Header } from "../../components/UI/Header/Header";
import { Heading } from "../../components/Typography/Heading";
import { IconButton, Tooltip } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { data, error, isLoading } = useGetForSaleQuery("5002,6020");
  const navigate = useNavigate();

  if (data) {
    console.log(data);
  }

  if (error) {
    console.error(error);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  return (
    <>
      <Header />
      <FavContainer>
        <Tooltip title="Перейти В Избранные" onClick={handleFavoritesClick}>
          <IconButton aria-label="Перейти В Избранные">
            <Favorite />
          </IconButton>
        </Tooltip>
      </FavContainer>
      <Container>
        <StyledMainPage>
          <Heading headingText="Дома В Продаже" />
          <CardsContainer>
            {data?.hits &&
              data.hits.map((card: CardItem) => (
                <Link key={card.id} to={`/card/${card.id}`}>
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
                </Link>
              ))}
          </CardsContainer>
        </StyledMainPage>
      </Container>
    </>
  );
};
