import { z } from "zod";
export const toolName = `easeesessions`;
export const toolDescription = `Returns lastSession info for all easee wallboxes (chargers) given user has access to.`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/alternative/easee/lastSessions`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "username": z.string().describe("Username as used on easy.cloud").optional(), "password": z.string().describe("Password as used on easy.cloud").optional() }).optional() }).shape;
