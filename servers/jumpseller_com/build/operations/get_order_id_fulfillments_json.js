import { z } from "zod";
export const toolName = `get_order_id_fulfillments_json`;
export const toolDescription = `Retrieve the Fulfillments associated with the Order.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/order/{id}/fulfillments.json`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the Order") }).optional() }).shape;
