import { z } from "zod";
export const toolName = `put_orders_orderid_ignore`;
export const toolDescription = `Ignore order`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{orderId}/ignore`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "orderId": z.string() }).optional() }).shape;
