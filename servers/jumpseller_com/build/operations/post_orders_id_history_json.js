import { z } from "zod";
export const toolName = `post_orders_id_history_json`;
export const toolDescription = `Create a new Order History Entry.`;
export const baseUrl = `https://api.jumpseller.com/v1`;
export const path = `/orders/{id}/history.json`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "login": z.string().describe("API OAuth login."), "authtoken": z.string().describe("API OAuth token.") }).optional(), "path": z.object({ "id": z.number().int().describe("Id of the OrderHistory") }).optional(), "body": z.object({ "order_history": z.object({ "message": z.string().describe("Message of the Order History").optional() }).optional() }).optional() }).shape;
