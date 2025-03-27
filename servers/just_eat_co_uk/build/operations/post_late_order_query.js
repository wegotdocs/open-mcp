import { z } from "zod";
export const toolName = `post_late_order_query`;
export const toolDescription = `late order query, restaurant response required`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/late-order-query`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "orderId": z.string().describe("Just Eat order identifier").optional(), "restaurantId": z.string().describe("Just Eat restaurant identifier").optional(), "tenant": z.string().describe("Tenant (Country) of order restaurant.").optional() }).optional() }).shape;
