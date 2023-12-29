import React from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { useGetForSaleQuery } from "../../store/API/saleApi";
import Cards from "../../components/UI/Cards/Cards";
import Logo from "../../components/UI/Logo/Logo";

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
      {!!data?.results &&
        data.results.map((result) => (
          <Cards
            key={result.id} // Make sure to provide a unique key
            state={result.state}
            price={result.price}
            purpose={result.purpose}
            title={result.title}
            location={[result.level, result.name]}
            rooms={result.rooms}
            baths={result.baths}
            area={result.area}
            coverPhoto={result.coverPhoto}
            phoneNumber={result.phoneNumber}
            contactName={result.contactName}
          />
        ))}
    </Container>
  );
};
