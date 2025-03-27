import { z } from "zod";
export const toolName = `post_orders_tenant_orderid_restaurantqueries_compensation`;
export const toolDescription = `Create Compensation requests`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{tenant}/{orderId}/restaurantqueries/compensation`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "orderId": z.string().describe("Id for the order.") }).optional(), "header": z.object({ "Authorization": z.string().describe("Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`") }).optional(), "body": z.object({ "Comments": z.string().describe("Any other comments to add to the request").optional(), "ReasonCode": z.enum(["NotSet", "BeingPrepared", "OnItsWay", "Delivered", "Unknown"]).describe("The reason why compensation is due").optional() }).optional() }).shape;
