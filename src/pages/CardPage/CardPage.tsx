// CardPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { CardItem } from "../../store/API/saleApi";

interface CardPageProps {
  cards: CardItem[];
}

export const CardPage: React.FC<CardPageProps> = ({ cards }) => {
  const { id } = useParams<{ id: string }>();
  const selectedCard = cards.find((card) => card.id === Number(id));

  return (
    <div>
      <h2>{selectedCard?.title}</h2>
      <p>Price: {selectedCard?.price}</p>
      <p>Rooms: {selectedCard?.rooms}</p>
      <p>Baths: {selectedCard?.baths}</p>
      <p>Area: {selectedCard?.area}</p>
    </div>
  );
};

