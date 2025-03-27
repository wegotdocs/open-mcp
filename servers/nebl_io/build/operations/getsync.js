import { z } from "zod";
export const toolName = `getsync`;
export const toolDescription = `Get node sync status`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/ins/sync`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
