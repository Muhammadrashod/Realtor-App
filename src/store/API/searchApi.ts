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
      }),
    }),
  }),
});

export const { useGetForSaleQuery } = searchApi;
