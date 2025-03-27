import { z } from "zod";
export const toolName = `delete_subscriptions_id_`;
export const toolDescription = `Delete a subscription.`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/subscriptions/{id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the subscription to delete") }).optional() }).shape;
