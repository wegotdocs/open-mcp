import { z } from "zod";
export const toolName = `post_firewalls_id_actions_set_rules`;
export const toolDescription = `Set Rules`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/firewalls/{id}/actions/set_rules`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Firewall") }).optional() }).shape;
