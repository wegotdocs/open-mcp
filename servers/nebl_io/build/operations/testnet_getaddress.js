import { z } from "zod";
export const toolName = `testnet_getaddress`;
export const toolDescription = `Returns address object`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/addr/{address}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape;
