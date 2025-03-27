import { z } from "zod";
export const toolName = `quittungcreate`;
export const toolDescription = `Create a receipt for an energy delivery (only valid in Germany).`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/quittung/create`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "email": z.string().optional() }).optional() }).shape;
