import { z } from "zod";
export const toolName = `post_orders_tenant_orderid_consumerqueries_lateorder_restaurantr`;
export const toolDescription = `Response to Late Order Update Request`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{tenant}/{orderId}/consumerqueries/lateorder/restaurantresponse`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "orderId": z.string().describe("Id for the order.") }).optional(), "header": z.object({ "Authorization": z.string().describe("Containing a partner issued API key e.g. `JE-API-KEY ABCDE123456789`") }).optional(), "body": z.object({ "additionalDeliveryTimeToAddMinutes": z.number().int().describe("The amount of time to add to the current delivery estimate in minutes").optional(), "lateOrderStatus": z.enum(["Preparing", "OnItsWay", "Delivered"]).describe("The updated later order query status").optional() }).optional() }).shape;
