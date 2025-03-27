import { z } from "zod";
export const toolName = `testnet_getblockindex`;
export const toolDescription = `Returns block hash of block`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/block-index/{blockindex}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "blockindex": z.number().describe("Block Index") }).optional() }).shape;
