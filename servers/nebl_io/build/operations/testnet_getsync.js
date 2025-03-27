import { z } from "zod";
export const toolName = `testnet_getsync`;
export const toolDescription = `Get node sync status`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ins/sync`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
