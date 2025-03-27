import { z } from "zod";
export const toolName = `testnet_gettxs`;
export const toolDescription = `Get transactions by block or address`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/txs`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "address": z.string().describe("Address").optional(), "block": z.string().describe("Block Hash").optional(), "pageNum": z.number().describe("Page number to display").optional() }).optional() }).shape;
