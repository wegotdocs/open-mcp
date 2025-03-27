import { z } from "zod";
export const toolName = `post_send_to_pos_failed`;
export const toolDescription = `Send to POS failed`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/send-to-pos-failed`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "OrderId": z.string().optional() }).optional() }).shape;
