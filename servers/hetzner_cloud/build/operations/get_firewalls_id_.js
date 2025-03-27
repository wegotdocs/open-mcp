import { z } from "zod";
export const toolName = `get_firewalls_id_`;
export const toolDescription = `Get a Firewall`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/firewalls/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the resource") }).optional() }).shape;
