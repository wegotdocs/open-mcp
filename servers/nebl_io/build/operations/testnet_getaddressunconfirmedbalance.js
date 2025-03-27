import { z } from "zod";
export const toolName = `testnet_getaddressunconfirmedbalance`;
export const toolDescription = `Returns address unconfirmed balance in sats`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/addr/{address}/unconfirmedBalance`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "address": z.string().describe("Address") }).optional() }).shape;
