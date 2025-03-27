import { z } from "zod";
export const toolName = `get_actions`;
export const toolDescription = `Get all Actions`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/actions`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "id": z.number().int().describe("Can be used multiple times, the response will contain only Actions with specified IDs").optional(), "sort": z.enum(["id", "id:asc", "id:desc", "command", "command:asc", "command:desc", "status", "status:asc", "status:desc", "progress", "progress:asc", "progress:desc", "started", "started:asc", "started:desc", "finished", "finished:asc", "finished:desc"]).describe("Can be used multiple times.").optional(), "status": z.enum(["running", "success", "error"]).describe("Can be used multiple times, the response will contain only Actions with specified statuses").optional() }).optional() }).shape;
