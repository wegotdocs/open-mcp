import { z } from "zod";
export const toolName = `post_primary_ips_id_actions_assign`;
export const toolDescription = `Assign a Primary IP to a resource`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/primary_ips/{id}/actions/assign`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Primary IP") }).optional() }).shape;
