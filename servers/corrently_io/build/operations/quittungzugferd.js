import { z } from "zod";
export const toolName = `quittungzugferd`;
export const toolDescription = `Retrieve Zugferd XML for a given receipt (Strom-Quittung).`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/quittung/zugferd`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "account": z.string().describe("Quittung Identifier  (serialnumber generated during receipt generation process)").optional() }).optional() }).shape;
