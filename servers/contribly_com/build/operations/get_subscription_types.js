import { z } from "zod";
export const toolName = `get_subscription_types`;
export const toolDescription = `Subscription types`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/subscription-types`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
