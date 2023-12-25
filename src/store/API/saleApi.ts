import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xKey } from "../../utils/baseUrl";

export interface RealtorResponse {
    count:number;
    results: number;
    total:number
}

export interface IRealtorRequestParams {
    
}



export const saleApi = createApi({
  reducerPath: "salehApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl, 
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', xKey);
        headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');
        return headers
    }
}),
  endpoints: (builder) => ({
    getForSale: builder.query<RealtorResponse, IRealtorRequestParams>({
      query: (locationExternalIDs: any) => ({
        url: "/properties/list",
        params: {
            locationExternalIDs,
        },
      }),
    }),
  }),
});

export const { useGetForSaleQuery } = saleApi;
