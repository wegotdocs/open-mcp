import { z } from "zod";
export const toolName = `cancelauthorization`;
export const toolDescription = `Cancel an existing authorization`;
export const baseUrl = `https://api.klarna.com`;
export const path = `/payments/v1/authorizations/{authorizationToken}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "authorizationToken": z.string() }).optional() }).shape;
