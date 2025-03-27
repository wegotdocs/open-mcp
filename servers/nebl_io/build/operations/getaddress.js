import { z } from "zod";
export const toolName = `getaddress`;
export const toolDescription = `Returns address object`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/ins/addr/{address}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape;
