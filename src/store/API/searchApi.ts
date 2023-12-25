import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface RealtorResponse {
  data: any;
}

export interface IRealtorRequestParams {
  location: string;
}

export const searchApi = createApi({
  reducerPath: "searchApi", 
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getForSale: builder.query<RealtorResponse, IRealtorRequestParams>({
      query: (params) => ({
        url: "/forsale",
        method: "GET",
        params: {
          location: params.location,
        },
        headers: {
          'X-RapidAPI-Key': '0edb7daa60msh1d95aeb2742ecbcp168a94jsn463033e9499b',
          'X-RapidAPI-Host': 'realtor16.p.rapidapi.com',
        },
      }),
    }),
  }),
});

export const { useGetForSaleQuery } = searchApi;
