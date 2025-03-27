import { z } from "zod";
export const toolName = `post_networks_id_actions_delete_subnet`;
export const toolDescription = `Delete a subnet from a Network`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/networks/{id}/actions/delete_subnet`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Network") }).optional() }).shape;
