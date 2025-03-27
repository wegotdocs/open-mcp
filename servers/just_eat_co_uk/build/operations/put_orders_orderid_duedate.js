import { z } from "zod";
export const toolName = `put_orders_orderid_duedate`;
export const toolDescription = `Update order ETA`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{orderId}/duedate`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "orderId": z.string() }).optional(), "body": z.object({ "DueDate": z.string().datetime({ offset: true }).describe("The updated ETA for the order").optional() }).optional() }).shape;
