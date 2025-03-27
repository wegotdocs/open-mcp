import { z } from "zod";
export const toolName = `getaddressbalance`;
export const toolDescription = `Returns address balance in sats`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/ins/addr/{address}/balance`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape;
