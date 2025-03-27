import { z } from "zod";
export const toolName = `post_networks_id_actions_add_route`;
export const toolDescription = `Add a route to a Network`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/networks/{id}/actions/add_route`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Network") }).optional() }).shape;
