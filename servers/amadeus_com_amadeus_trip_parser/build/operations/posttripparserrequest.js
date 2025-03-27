import { z } from "zod";
export const toolName = `posttripparserrequest`;
export const toolDescription = `POST Trip Parser request`;
export const baseUrl = `https://test.api.amadeus.com/v3`;
export const path = `/travel/trip-parser`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
