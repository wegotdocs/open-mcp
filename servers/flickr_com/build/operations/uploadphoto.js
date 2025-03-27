import { z } from "zod";
export const toolName = `uploadphoto`;
export const toolDescription = `Uploads a new photo to Flickr`;
export const baseUrl = `https://api.flickr.com/services`;
export const path = `/upload`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
