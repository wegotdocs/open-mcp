import { z } from "zod";
export const toolName = `post_orders_orderid_readyforcollection`;
export const toolDescription = `Mark order as ready for collection`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{orderId}/readyforcollection`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "orderId": z.string().describe("The ID of the order to mark as ready for collection") }).optional() }).shape;
