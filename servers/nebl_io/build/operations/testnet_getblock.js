import { z } from "zod";
export const toolName = `testnet_getblock`;
export const toolDescription = `Returns information regarding a Neblio block`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/block/{blockhash}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "blockhash": z.string().describe("Block Hash") }).optional() }).shape;
