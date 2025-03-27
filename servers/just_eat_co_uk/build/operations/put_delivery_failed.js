import { z } from "zod";
export const toolName = `put_delivery_failed`;
export const toolDescription = `Delivery Attempt Failed`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/delivery-failed`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "OrderId": z.string().describe("The id of the order").optional(), "Reason": z.string().describe("The reason for creating the attempted delivery").optional(), "RestaurantId": z.number().describe("The id of the restaurant").optional(), "Tenant": z.string().describe("The tenant associated with the order").optional() }).optional() }).shape;
