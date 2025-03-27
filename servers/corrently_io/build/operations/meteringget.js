import { z } from "zod";
export const toolName = `meteringget`;
export const toolDescription = `Meter Reading`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/metering/reading`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "account": z.string().describe("Account/Address (Stromkonto) to retrieve reading for.").optional() }).optional() }).shape;
