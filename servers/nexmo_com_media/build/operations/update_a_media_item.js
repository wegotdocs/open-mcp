import { z } from "zod";
export const toolName = `update_a_media_item`;
export const toolDescription = `Update a media item`;
export const baseUrl = `https://api.nexmo.com/v3/media`;
export const path = `/:id/info`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({}).shape;
