import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xKey } from "../../utils/baseUrl";

export interface CardItem {
  id: number;
  state: string;
  price: string;
  purpose: string;
  title: string;
  location: { level: string; name: string };
  rooms: string;
  baths: string;
  area: string;
  coverPhoto: { id: number; url: string };
  phoneNumber: {
    mobile: string;
  };
  contactName: string;
}

export interface FavoriteCardItem {
  objectID: number;
  state: string;
  price: string;
  purpose: string;
  title: string;
  rooms: string;
  baths: string;
  area: string;
  contactName: string;
  coverPhoto: { id: string; url: string };
  phoneNumber: {
    mobile: string;
  };
}

export interface RealtorResponse {
  count: number;
  hits: CardItem[];
  total: number;
  id: CardItem[];
}

export interface IRealtorRequestParams {
  locationExternalIDs: any;
  externalID: any;
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
          locationExternalIDs,
        },
      }),
    }),
    getExactCard: builder.query<RealtorResponse, any>({
      query: (externalID) => ({
        url: "/properties/detail",
        params: {
          externalID,
        },
      }),
    }),
  }),
});

export const { useGetForSaleQuery, useGetExactCardQuery } = saleApi;
