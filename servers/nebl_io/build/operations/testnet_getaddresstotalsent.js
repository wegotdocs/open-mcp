import { z } from "zod";
export const toolName = `testnet_getaddresstotalsent`;
export const toolDescription = `Returns total sent by address in sats`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/addr/{address}/totalSent`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape;
