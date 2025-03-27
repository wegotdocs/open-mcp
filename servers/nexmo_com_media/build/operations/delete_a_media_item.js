import { z } from "zod";
export const toolName = `delete_a_media_item`;
export const toolDescription = `Delete a media item`;
export const baseUrl = `https://api.nexmo.com/v3/media`;
export const path = `/:id`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({}).shape;
