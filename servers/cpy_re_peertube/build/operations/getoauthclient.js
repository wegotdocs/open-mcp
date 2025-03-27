import { z } from "zod";
export const toolName = `getoauthclient`;
export const toolDescription = `Login prerequisite`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/oauth-clients/local`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
