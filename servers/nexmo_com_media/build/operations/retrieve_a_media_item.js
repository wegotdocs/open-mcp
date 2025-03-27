import { z } from "zod";
export const toolName = `retrieve_a_media_item`;
export const toolDescription = `Retrieve a media item`;
export const baseUrl = `https://api.nexmo.com/v3/media`;
export const path = `/:id/info`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
