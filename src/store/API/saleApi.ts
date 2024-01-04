import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xKey } from "../../utils/baseUrl";

export interface CardItem {
  id: number;
  state: string;
  price: number;
  purpose: string;
  title_13: string;
  location: { level: number; name: string };
  rooms: number;
  baths: number;
  area: number;
  coverPhoto: { id: number; url: string; main: boolean };
  phoneNumber: { mobile: number; phone: number };
  contactName: string;
}
export interface RealtorResponse {
  count: number;
  results: [];
  total: number;
}

export interface IRealtorRequestParams {
  locationExternalIDs: string;
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
    getForSale: builder.query<RealtorResponse, IRealtorRequestParams>({
      query: (params) => ({
        url: "/properties/list",
        params,
      }),
    }),
  }),
});

export const { useGetForSaleQuery } = saleApi;
