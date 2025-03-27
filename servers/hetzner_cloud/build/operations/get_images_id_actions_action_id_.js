import { z } from "zod";
export const toolName = `get_images_id_actions_action_id_`;
export const toolDescription = `Get an Action for an Image`;
export const baseUrl = `https://api.hetzner.cloud/v1`;
export const path = `/images/{id}/actions/{action_id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Image"), "action_id": z.number().int().describe("ID of the Action") }).optional() }).shape;
