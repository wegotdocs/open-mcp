import { z } from "zod";
export const toolName = `get_api_v1_server_following`;
export const toolDescription = `List instances followed by the server`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/following`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "state": z.enum(["pending", "accepted"]).optional(), "actorType": z.enum(["Person", "Application", "Group", "Service", "Organization"]).optional(), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.string().describe("Sort column").optional() }).optional() }).shape;
