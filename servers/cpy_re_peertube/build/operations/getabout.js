import { z } from "zod";
export const toolName = `getabout`;
export const toolDescription = `Get instance "About" information`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/config/about`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
