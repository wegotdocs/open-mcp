import { z } from "zod";
export const toolName = `post_networks_id_actions_change_ip_range`;
export const toolDescription = `Change IP range of a Network`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/networks/{id}/actions/change_ip_range`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Network") }).optional() }).shape;
