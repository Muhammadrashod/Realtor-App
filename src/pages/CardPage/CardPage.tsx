import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { useGetForSaleQuery, CardItem } from "../../store/API/saleApi";
import { useParams } from "react-router-dom";
import ExactCard from "../../components/UI/Cards/ExactCard";

export const CardPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetForSaleQuery("5002,6020"); 

  console.log("Data:", data);

  if (isError) {
    console.error("Error loading card:", isError);
  }

  const exactCard = data?.hits.find((card: CardItem) => card.id.toString() === id);

  return (
    <Container>
      {isLoading && <h1>Идет Загрузка...</h1>}
      {exactCard && !isLoading && !isError && (
        <ExactCard
          id={exactCard.id}
          state={`Активность: ${exactCard.state}`}
          price={`Цена: ${exactCard.price}`}
          purpose={`Цель: ${exactCard.purpose}`}
          title={exactCard.title}
          location={{
            level: exactCard.location.level,
            name: exactCard.location.name,
          }}
          rooms={`Количество Комнат: ${exactCard.rooms}`}
          baths={`Количество Ванных Комнат: ${exactCard.baths}`}
          area={`Площадь: ${exactCard.area}`}
          coverPhoto={{
            id: exactCard.coverPhoto.id,
            url: exactCard.coverPhoto.url,
          }}
          phoneNumber={exactCard.phoneNumber}
          contactName={`Имя Продовца: ${exactCard.contactName}`}
        />
      )}
    </Container>
  );
};
