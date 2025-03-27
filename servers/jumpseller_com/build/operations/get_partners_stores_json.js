import { z } from "zod";
export const toolName = `get_partners_stores_json`;
export const toolDescription = `Retrieve statistics.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/partners/stores.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "partner_code": z.string().describe("Partner code."), "auth_token": z.string().describe("Partner authentication token."), "page": z.number().int().describe("List page"), "from": z.string().describe("Statistics start date. Should be in format 'Y-m-d'."), "to": z.string().describe("Statistics end date. Should be in format 'Y-m-d'.") }).optional() }).shape;
