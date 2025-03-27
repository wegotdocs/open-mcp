import { z } from "zod";
export const toolName = `getaccounts`;
export const toolDescription = `List accounts`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/accounts`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional() }).optional() }).shape;
