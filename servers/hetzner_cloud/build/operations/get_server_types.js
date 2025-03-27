import { z } from "zod";
export const toolName = `get_server_types`;
export const toolDescription = `Get all Server Types`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/server_types`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter Server types by their name. The response will only contain the Server type matching the specified name.").optional() }).optional() }).shape;
