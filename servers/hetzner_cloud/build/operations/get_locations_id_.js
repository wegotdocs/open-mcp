import { z } from "zod";
export const toolName = `get_locations_id_`;
export const toolDescription = `Get a Location`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/locations/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of Location") }).optional() }).shape;
