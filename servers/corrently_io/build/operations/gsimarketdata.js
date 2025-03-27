import { z } from "zod";
export const toolName = `gsimarketdata`;
export const toolDescription = `Marketdata`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/gsi/marketdata`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "zip": z.string().describe("Zipcode (Postleitzahl) of a city in Germany.").optional() }).optional() }).shape;
