import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xKey } from "../../utils/baseUrl";

export interface CardItem {
  id: number;
  state: string;
  price: string;
  purpose: string;
  title: string;
  location: { level: number; name: string };
  rooms: string;
  baths: string;
  area: string;
  coverPhoto: { id: number; url: string; main: boolean };
  phoneNumber: { mobile: number; phone: number };
  contactName: string;
}
export interface RealtorResponse {
  count: number;
  hits: CardItem[];
  total: number;
}

export interface IRealtorRequestParams {
  locationExternalIDs: any;
}

export const saleApi = createApi({
  reducerPath: "saleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", "bayut.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getForSale: builder.query<RealtorResponse, any>({
      query: (locationExternalIDs) => ({
        url: "/properties/list",
        params: {
          locationExternalIDs
        },
      }),
    }),
  }),
});

export const { useGetForSaleQuery } = saleApi;
