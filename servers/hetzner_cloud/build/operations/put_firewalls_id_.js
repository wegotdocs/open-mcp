import { z } from "zod";
export const toolName = `put_firewalls_id_`;
export const toolDescription = `Update a Firewall`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/firewalls/{id}`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the resource") }).optional() }).shape;
