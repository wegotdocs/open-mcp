import { z } from "zod";
export const toolName = `quittungtsesignature`;
export const toolDescription = `Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/quittung/tsesignature`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "account": z.string().describe("Quittung Identifier  (serialnumber generated during receipt generation process)").optional() }).optional() }).shape;
