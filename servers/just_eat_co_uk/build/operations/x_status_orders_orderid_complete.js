import { z } from "zod";
export const toolName = `x_status_orders_orderid_complete`;
export const toolDescription = ``;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/orders/{orderId}/complete`;
export const method = `x-status`;
export const security = [];
export const inputParams = z.object({}).shape;
