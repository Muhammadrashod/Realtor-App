import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import Logo from "../../components/UI/Logo/Logo";
import { IGetListProps } from "../../components/UI/Cards/Cards";

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
      {(Array.isArray(data?.results) ? data.results : []).map(
        (result: IGetListProps) => (
          <Cards
            key={result.id}
            id={result.id}
            state={result.state}
            price={result.price}
            purpose={result.purpose}
            title={result.title}
            location={result.location}
            rooms={result.rooms}
            baths={result.baths}
            area={result.area}
            coverPhoto={result.coverPhoto}
            phoneNumber={result.phoneNumber}
            contactName={result.contactName}
          />
        )
      )}
    </Container>
  );
};
