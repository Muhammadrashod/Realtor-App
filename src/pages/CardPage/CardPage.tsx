import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { useGetExactCardQuery, RealtorResponse, CardItem } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import { useParams } from "react-router-dom";

export interface CardProps {
  card: CardItem;
}

export const CardPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetExactCardQuery(id);

  console.log("Data:", data);

  const card = data as RealtorResponse | null;
  console.log("Card:", card);

  return (
    <Container>
      {isError && <h1>Произошла Ошибка</h1>}
      {isLoading && <h1>Идет Загрузка...</h1>}
      {card && (
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
          phoneNumber={card.phoneNumber.mobile}
          contactName={`Имя Продовца: ${card.contactName}`}
        />
      )}
    </Container>
  );
};
