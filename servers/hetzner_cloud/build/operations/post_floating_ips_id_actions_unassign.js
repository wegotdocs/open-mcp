import { z } from "zod";
export const toolName = `post_floating_ips_id_actions_unassign`;
export const toolDescription = `Unassign a Floating IP`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/floating_ips/{id}/actions/unassign`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Floating IP") }).optional() }).shape;
